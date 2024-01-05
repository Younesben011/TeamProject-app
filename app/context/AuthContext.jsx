import {createContext,useContext,useEffect,useState} from 'react';
import axios from 'axios'
import * as SecureStore from 'expo-secure-store'

const AuthContext = createContext()
const APIURL = "http://192.168.1.3:3001/auth"

export const useAuth=()=>{
    return useContext(AuthContext)
}

export const  AuthProvider=({children})=>{
    const [authState,setAuthState]=useState({token:null,authenticated:false,user_id:null,role:null});
    useEffect(()=>{
        const loadToken = async ()=>{
            // await SecureStore.setItemAsync("token",respond.data.token)
            const token = await SecureStore.getItemAsync("token");
            const id = await SecureStore.getItemAsync("user_id");
            const role = await SecureStore.getItemAsync("role");
            if(!token)
                return
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
            setAuthState({
                token:token,
                authenticated:true,
                user_id:id,
                role
            })
        }
        loadToken()
    },[])



    // {
    //     username,password,email,firstname,lastname,gender,phonenumber,profilepicture,address,
    //     usertype,
    // }
    const register = async (registerProps)=>{
        console.log(registerProps);
        try {
            return await axios.post(`${APIURL}/register`,registerProps)
            // return await axios.get("")

        } catch (error) {
            console.log(error);
            return {error:true,msg:"error"}
            // return {error:true,msg:error.response.data.msg}
        }
    }
    
    const login = async (email,password)=>{
        try {
            const respond = await axios.post(`${APIURL}/login`,{email,password})
            authState.token=respond.data.token
            authState.authenticated=true
            authState.user_id=respond.data.user_id
            authState.role=respond.data.role

            setAuthState({...authState});
            if(respond.status!=200)
                return {error:true,msg:"error"}
            await SecureStore.setItemAsync("token",respond.data.token)
            await SecureStore.setItemAsync("id",respond.data.user_id)
            await SecureStore.setItemAsync("role",respond.data.role)
            axios.defaults.headers.common["Authorization"] = `Bearer ${respond.data.token}`



            return respond.data

        } catch (error) {
            return {error:true,msg:"error"}
        }
    }

    const logout = async()=>{
        // Delete token from storage
        console.log("logout");
        await SecureStore.deleteItemAsync("token")
        await SecureStore.deleteItemAsync("id")
        await SecureStore.deleteItemAsync("role")

        // Update HTTP headers
        axios.defaults.headers.common["Authorization"] = ""

        //Reset Auth state
        setAuthState({
            token:null,
            authenticated:null,
            user_id:null,
            role:null
        })
    }

    const value={
        onRegister:register,
        onlogin:login,
        onlogout:logout,
        authState
    };

    
    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}