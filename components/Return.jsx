import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {ArrowUturnLeftIcon} from "react-native-heroicons/outline"
import { dark, light, primary700 } from '../styles/Colors'
import { Path, Svg } from 'react-native-svg'
import { alignTopLeft, alignTopRight, shadowProps } from '../styles'
const Return = ({returnFunc}) => {
  return (
    <View style={[{backgroundColor:light},alignTopLeft,styles.circle]}>
        {/* <Svg strokeWidth="1.5" stroke={dark} >
            <Path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
        </Svg> */}

      <ArrowUturnLeftIcon onPress={returnFunc?returnFunc:null} color={primary700} strokeWidth={2}  />
    </View>
  )
}

export default Return

const styles = StyleSheet.create({
    circle:{
        padding:15,
        borderRadius:100,
        shadowRadius:2,
        shadowOpacity:0.1,
        shadowOffset:{
            height:4
        },
        top:30,
        left:20
    }
})