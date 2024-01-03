import { StyleSheet, Text, View,TextInput, Button } from 'react-native'
import React, { useContext, useState } from 'react'
import {columm10, columm25, colummhalf, columns, flex1, rows} from '../styles'
import { useAuth } from '../app/context/AuthContext'

const sty={
    padding:10,
    borderWidth:1,}
const Register = () => {
   const {onRegister,} = useAuth()
    //    {
    //     username,password,email,firstname,lastname,gender,phonenumber,profilepicture,address,
    //     usertype,
    // }
   const [username,setUsername]=useState("")
   const [password,setPassword]=useState("")
   const [email,setEmail]=useState("")
   const [firstname,setFirstname]=useState("")
   const [lastname,setLastname]=useState("")
   const [gender,setGender]=useState("")
   const [phonenumber,setPhonenumber]=useState(0)
   const [profilepicture,setProfilepicture]=useState("")
   const [address,setAddress]=useState({})
   const [usertype,setUsertype]=useState("admin")


   const register = async ()=>{
    console.log("sss");
    const respond = await onRegister({
        username,
        password,
        email,
        firstname,
        lastname,
        gender,
        phonenumber,
        profilepicture,
        address,
        usertype})
    console.log(respond.data);
   }




  return (
    <View style={[columns,{gap:30,}]}>
        <View style={[rows]}>
            <TextInput style={[colummhalf,sty]}  placeholder='first name' onChangeText={setFirstname}/>
            <TextInput style={[colummhalf,sty]}  placeholder='last name' onChangeText={setLastname}/>
        </View>
        <TextInput style={sty}  placeholder='username' onChangeText={setUsername}/>
        <TextInput style={sty} placeholder='password' textContentType='password' onChangeText={setPassword} />
        <View style={[rows]}>
            <TextInput style={[columm25,sty]}  placeholder='code'/>
            <TextInput style={[flex1,sty]}  placeholder='phone number' onChangeText={setPhonenumber}/>
        </View>
        <Button title='register' onPress={register}/>
    </View>
  )
}

export default Register

// const styles = StyleSheet.create({})