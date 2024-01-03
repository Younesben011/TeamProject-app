import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import {columns, textInput}from '../styles'
const YtextInput = ({onchange,placeholder}) => {
  return (
    <View >
    <TextInput style={[textInput]}  placeholder={placeholder} onChangeText={onchange?onchange:null}/>
    </View>
  )
}


export default YtextInput
