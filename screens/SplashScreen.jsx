import { View, Text,Image } from 'react-native'
import React from 'react'
import {Svg,}from "react-native-svg"
import Logo from '../components/Logo'
import { centerItems, fullcenterItems } from '../styles'
const SplashScreen = () => {




  return (
    <View style={fullcenterItems}>
        <Logo width={137} height={140}/>
    </View>
  )
}

export default SplashScreen