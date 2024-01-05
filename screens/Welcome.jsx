import { View, Text, Pressable } from 'react-native'
import React, { useEffect } from 'react'
import { useAuth } from '../app/context/AuthContext'

const Welcome = ({navigation}) => {
  const {authState,} =useAuth()

  return (
    <View>
      <Text style={{fontSize:20,padding:30}}>Wellcom</Text>
      <Pressable onPress={()=>{navigation.navigate("login")}} ><Text>login</Text></Pressable>
    </View>
  )
}

export default Welcome