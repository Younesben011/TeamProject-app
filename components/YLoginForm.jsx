import { Dimensions, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { Keyboard } from 'react-native'
import { Paragraph02, alignCenterRight, alignTopLeft, alignTopRight, columns } from '../styles'
import YtextInput from './YtextInput'
import { dark, dark200, dark500, primary700 } from '../styles/Colors'
import {EyeIcon,EyeSlashIcon,UserIcon} from "react-native-heroicons/outline"
const YLoginForm = ({email,password,forgetfunc} ) => {
    const textInput = {
      paddingHorizontal:20,
      paddingVertical:16,
      borderRadius:16,
      borderWidth:1,
    }
  
    const winWidth = Dimensions.get('window').width
    const [focusChange,setFocusChange]=useState(false) 
    const [protection,setProtection]=useState(true)

    const emailRef =useRef(null)
    const passwordRef =useRef(null)


    const KeyboardHandller = (e)=>{
        
          passwordRef.current.focus()
    }

    const focusHandller = ()=>{
      if(emailRef.current!=null && emailRef.current.isFocused())
          setFocusChange((prev)=>{return !prev})
      if(passwordRef.current!=null && passwordRef.current.isFocused())
        setFocusChange((prev)=>{return !prev})
    }

    const emailColor=()=>(emailRef.current?emailRef.current.isFocused()?primary700:dark500:dark500)
    const passwordColor=()=>(passwordRef.current?passwordRef.current.isFocused()?primary700:dark500:dark500)
    const IconSize= 27
    const IconStyle =[alignCenterRight,{top:32,right:15}]

    


    const protectionIcon=()=>{
      return(
        protection?
          <EyeSlashIcon size={IconSize} onPress={()=>{setProtection(false)}} style={IconStyle}  color={passwordColor()}/>:
          <EyeIcon size={IconSize}  color={passwordColor()} onPress={()=>{setProtection(true)}}  style={IconStyle} />
        )}


  return (
    <Pressable  style={[columns,{gap:25},styles.loginform,]}>
    {/* <YtextInput ref={emailRef} onFocus={focusHandller}  width={winWidth*.90} onchange={emai?emai:null} lable="Email" placeholder="enter your email or username"/>
    <YtextInput  ref={passwordRef} width={winWidth*.90} onchange={password?password:null} lable="Password" placeholder="enter your password"/> */}
    <View style={[columns,{gap:5}]} >
      <Text style={[Paragraph02,
        {
          color:emailColor()
          
        }]}>Email</Text>
      <TextInput
            onSubmitEditing={KeyboardHandller} 
            keyboardType='email-address'
            onFocus={focusHandller} 
            ref={emailRef} 
            style={[textInput,{width:winWidth*.90,borderColor:emailColor(),position:"relative"}]}  
            placeholder= "enter your email or username"
            onChangeText={email?email:null}
            />
          <UserIcon color={emailColor()} size={IconSize} style={IconStyle}/>
    </View>

    <View style={[columns,{gap:5}]} >
      <Text 
        style={[
          Paragraph02,
          {color:passwordColor()}
          ]}>Password</Text>
      <TextInput 
            textContentType='password'
            secureTextEntry={protection}
            returnKeyType='done' 
            onSubmitEditing={()=>{passwordRef.current.blur();setFocusChange(prev=>!prev)}}
            onFocus={focusHandller} 
            ref={passwordRef} 
            style={[textInput,
              {
                width:winWidth*.90,
                borderColor:passwordColor(),
                position:"relative"
              }]}  
            placeholder= "enter your password"
            onChangeText={password?password:null}/>
            {protectionIcon()}


    </View>

    {/* forget password */}
    <Pressable onPress={forgetfunc?forgetfunc:null} style={{alignItems:"flex-end",width:"90%",marginTop:-13}}>
      <Text style={[Paragraph02,{color:dark200}]}>forget password?</Text>
      </Pressable>
  </Pressable>
  )
}

export default YLoginForm

const styles = StyleSheet.create({  loginform:{
    alignItems:"center",
    width:"100%",
    marginTop:"auto"
  }})



