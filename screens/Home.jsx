import { View, Text, Button } from 'react-native'
import React from 'react'
import { useAuth } from '../app/context/AuthContext'

const Home = ({navigation}) => {
    const {onlogout} = useAuth()
  return (
    <View>
      <Text>Home</Text>
      <Button title='logout' onPress={()=>{onlogout(); navigation.navigate("login")}}/>
    </View>
  )
}

export default Home