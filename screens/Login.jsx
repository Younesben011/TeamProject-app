import { View, Text, Button, useAnimatedValue } from 'react-native'
import React, { useState } from 'react'
import YtextInput from '../components/YtextInput'
import { Heading01, columns } from '../styles'
import { useAuth } from '../app/context/AuthContext'

const Login = ({navigation}) => {
    const [password,setPassword]=useState("")
    const [email,setEmail]=useState("")
    const {onlogin} = useAuth()
    const login = async ()=>{
        const respond =await onlogin(email,password);
        console.log(respond);

    }
  return (
    <View style={[columns]}>
      <Text>LLogin</Text>
      <YtextInput onchange={setEmail} placeholder="email or username"/>
      <YtextInput onchange={setPassword} placeholder="password"/>
      <Button title='Login' onPress={login} />
    </View>
  )
}

export default Login