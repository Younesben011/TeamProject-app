import { View, Text, Button } from 'react-native'
import React, { useEffect } from 'react'
import { useAuth } from '../app/context/AuthContext'

const Home = ({navigation}) => {
    const {onlogout,authState} = useAuth()
    useEffect(()=>{
      const isAuth=()=>{
        if(!authState.authenticated)
          navigation.navigate("welcome")
      }
      isAuth()
    },[])
  return (
    <View>
      <Text style={{fontFamily:'WhyteInktrap-Black',fontSize:20,padding:30}}>Home</Text>
      <Button title='logout' onPress={()=>{onlogout();}}/>
    </View>
  )
}

export default Home