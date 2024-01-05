import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Paragraph01, Paragraph02, shadowProps } from '../styles'
import { light } from '../styles/Colors'

const YButton = ({W,H,title,onPress,color}) => {
  return (
    <Pressable 
        style={[styles.btn,{width:W,height:H,backgroundColor:color},shadowProps]}
        onPress={onPress?onPress:null}
        >
        <Text style={[Paragraph01,{color:light,}]}>{title}</Text>
    </Pressable>
  )
}

export default YButton

const styles = StyleSheet.create({
        btn:{
            width:"100%",
            height:"auto",
            paddingVertical:16,
            borderRadius:16,
            alignItems:"center",
            justifyContent:"center",

        },

})