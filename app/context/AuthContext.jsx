import {createContext,useContext,useEffect,useState} from 'react';
import axios from 'axios'
import * as SecureStore from 'expo-secure-store'

const AuthContext = createContext()
const APIURL = "http://192.168.1.3:3001/auth"

export const useAuth=()=>{
    return useContext(AuthContext)
}

export const  AuthProvider=({children})=>{
    const [authState,setAuthState]=useState({token:null,authenticated:null,user_id:null,role:null});

    useEffect(()=>{
        const loadToken = async ()=>{
            const token = SecureStore.getItemAsync("token");
            if(!token)
                return
            axios.defaults.headers.common["Authorization"] = `Bearer ${res.data.token}`
            setAuthState({
                token:res.data.token,
                authenticated:true,
                user_id:res.data.user_id,
                role:res.data.usertype

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
            const res = await axios.post(`${APIURL}/login`,{email,password})
            setAuthState({
                token:res.data.token,
                authenticated:true,
                user_id:res.data.user_id,
                role:res.data.usertype
            })
            axios.defaults.headers.common["Authorization"] = `Bearer ${res.data.token}`
            await SecureStore.setItemAsync("token",res.data.token)
            return res

        } catch (error) {
            return {error:true,msg:"error"}
        }
    }

    const logout = async()=>{
        // Delete token from storage
        console.log("logout");
        await SecureStore.deleteItemAsync("token")

        // Update HTTP headers
        axios.defaults.headers.common["Authorization"] = `Bearer ${res.data.token}`

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
        authState:authState
    };

    
    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}