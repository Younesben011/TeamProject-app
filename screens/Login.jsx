import { View, Text, Button, useAnimatedValue } from 'react-native'
import React, { useState } from 'react'
import YtextInput from '../components/YtextInput'
import { columns } from '../styles'
import { useAuth } from '../app/context/AuthContext'

const Login = () => {
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const [email,setEmail]=useState("")
    const {onlogin} = useAuth()
    const login = async ()=>{
        const respond =await onlogin(email,password)
        console.log(respond.data);
    }
  return (
    <View style={[columns]}>
      <Text>Login</Text>
      <YtextInput onchange={setEmail} placeholder="email or username"/>
      <YtextInput onchange={setPassword} placeholder="password"/>
      <Button title='Login' onPress={login} />
    </View>
  )
}

export default Login