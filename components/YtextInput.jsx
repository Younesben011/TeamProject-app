import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useRef, useState } from 'react'
import {Paragraph01, Paragraph02, Paragraph03, columns,}from '../styles'
import { dark, dark500, primary700, secondary200 } from '../styles/Colors'

const textInput = {
  paddingHorizontal:20,
  paddingVertical:16,
  borderRadius:16,
  borderWidth:1,
}
const YtextInput = ({onchange,placeholder,lable,width,icon,ref,onFocus}) => {
  const [borderColor,setBorderColor]=useState(dark500) 
  const [lableColor,setLableColor]=useState(dark) 

  return (
    <View style={[columns,{gap:5}]} >
      <Text style={[Paragraph02,{color:lableColor}]}>{lable}</Text>
      <TextInput returnKeyType='next' onFocus={onFocus?onFocus:null} ref={ref?ref:null} style={[textInput,{width:width,borderColor:borderColor}]}  placeholder={placeholder} onChangeText={onchange?onchange:null}/>
    </View>
  )
}


export default YtextInput
