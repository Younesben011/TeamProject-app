import { View, Text, Button, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import { useAuth } from '../app/context/AuthContext'
import { Heading01 } from '../styles'

const Home = ({navigation}) => {
    const {onlogout,authState} = useAuth()
    useEffect(()=>{
      const isAuth=()=>{
        if(!authState.authenticated)
          navigation.navigate("welcome")
      }
      isAuth()
    },[])
    const logout = async()=>{
      const respond = await onlogout();
      console.log(respond);
      if(respond){
        navigation.replace("welcome")
        navigation.navigate("login")
      }
    }
      return (
    <SafeAreaView>
      <Text style={Heading01}>Home</Text>
      <Button title='logout' onPress={logout}/>
    </SafeAreaView>
  )
}

export default Home