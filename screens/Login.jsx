import { View, Text, Button, useAnimatedValue, SafeAreaView, StatusBar, Dimensions, Pressable, StyleSheet, Keyboard } from 'react-native'
import React, { useState } from 'react'
import YtextInput from '../components/YtextInput'
import { Heading01, HeadingS, Paragraph01, Paragraph02, Paragraph03, alignBottomCenter, alignTopRight, alignbottomLeft, columns, fullSize, fullcenterItems, rows } from '../styles'
import { useAuth } from '../app/context/AuthContext'
import { dark200, light, primary700, secondary200 } from '../styles/Colors'
import YButton from '../components/YButton'
import { Path, Svg } from 'react-native-svg'
import YLoginForm from '../components/YLoginForm'
import Return from '../components/Return'
import { StackActions } from '@react-navigation/native'
const Login = ({navigation}) => {
    const [password,setPassword]=useState("")
    const [reset,setReset]=useState(false)
    const [email,setEmail]=useState("")
    const {onlogin} = useAuth()
    const winWidth = Dimensions.get('window').width
    const winHeight = Dimensions.get('window').height
    const login = async ()=>{
        console.log(email,password)
        const respond =await onlogin(email,password);
        if(respond.error)
          return
        console.log(respond);
        navigation.popToTop();
        navigation.replace("home")

    }
    const resetfunc=()=>{
      Keyboard.dismiss()
      setReset(prev=>!prev)
    }
  return (
    <Pressable onPress={resetfunc}>

    <SafeAreaView style={[columns,fullSize,{alignItems:"center",gap:winHeight*.2,backgroundColor:light}]}>
      <Return returnFunc={()=>{navigation.pop()}}/>
      {/* doodle top right */}
      <Svg style={[alignTopRight,{top:winHeight*-0.1}]} width="168" height="225" viewBox="0 0 168 225" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path  d="M196.393 -42.2748L193.794 -41.9276V203.25C193.794 216.522 174.777 218.724 171.744 205.804C170.188 199.175 163.116 195.468 156.78 197.958L127.98 209.278C113.82 214.843 101.991 197.279 112.473 186.25C121.079 177.194 114.66 162.236 102.166 162.236H50.9534C26.044 162.236 12.4189 133.201 28.3378 114.042C37.7578 102.705 37.3277 86.1448 27.332 75.3117L14.0151 60.8793C-13.2167 31.3663 4.09024 -16.5841 43.8937 -21.9016L193.794 -41.9276V-44.5498C193.794 -46.256 195.59 -47.3658 197.116 -46.6027C199.138 -45.5916 198.634 -42.5742 196.393 -42.2748Z" fill="#F87E4A"/>
        <Path  stroke="#1E293B" strokeWidth="2" d="M107.09 189.135V189.135C116.182 180.565 110.595 165.278 98.12 164.591L46.9848 161.773C22.113 160.403 10.1058 130.662 27.0545 112.408V112.408C37.0838 101.606 37.5654 85.0474 28.1807 73.6809L15.6779 58.5378C-9.88919 27.5715 10.0293 -19.3542 50.0649 -22.4742L203.61 -34.4398C205.817 -34.6118 206.472 -37.5344 204.549 -38.6317V-38.6317C203.051 -39.4868 201.188 -38.4051 201.188 -36.6801L201.188 206.721C201.188 224.948 176.207 230.087 169.013 213.34V213.34C165.578 205.346 156.6 201.307 148.339 204.039L121.307 212.981C106.862 217.759 96.0177 199.57 107.09 189.135Z" />
      </Svg>
      <Text style={[HeadingS,{color:light},alignTopRight,{top:winHeight*0.058,right:20}]} >Login</Text>
      
      {/* doodle botom left */}
      <Svg style={[alignbottomLeft,{bottom:winHeight*-0.13}]}  width="122" height="203" viewBox="0 0 122 203" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M55.6132 19.1459L53.304 19.5755C45.1661 21.0896 36.8054 18.4887 30.9625 12.6254C15.3161 -3.07572 -11.5132 7.76635 -11.8581 29.9297L-14.5666 203.97C-15.1544 241.741 22.2844 268.387 57.7791 255.459L94.1198 242.222C131.234 228.705 129.719 175.704 91.8937 164.328C68.1152 157.176 56.0778 130.718 66.3092 108.093L87.909 60.3295C97.7376 38.5952 79.0641 14.7827 55.6132 19.1459Z" fill="#1E293B"/>
        <Path stroke="#F87E4A" strokeWidth="2" d="M62.9408 17.4484L60.6124 17.7578C52.407 18.848 44.1923 15.8172 38.6612 9.65889C23.8498 -6.8322 -3.50545 2.60453 -4.99879 24.7202L-16.7254 198.386C-19.2704 236.076 16.7368 264.626 52.854 253.556L89.8319 242.221C127.597 230.645 128.831 177.637 91.6467 164.316C68.2709 155.941 57.6211 128.895 69.0115 106.831L93.0583 60.2508C104 39.0552 86.5863 14.3067 62.9408 17.4484Z" />
      </Svg>

      {/* login form */}
        <YLoginForm email={setEmail} password={setPassword} />

        <YButton title="Login" color={primary700} W={winWidth*.90} onPress={login}  />
        <View style={[
          alignBottomCenter,
          rows,
          {alignItems:"center",width:"100%",justifyContent:"center",gap:0,bottom:10}
          ]}>

        <Text style={[
          Paragraph02,
          {color:dark200,alignSelf:"center"}
        ]}>Dont have an account?
          </Text>
            {/* <Button title='Register'/> */}
            <Pressable onPress={()=>{navigation.navigate("register")}}>
              <Text style={[Paragraph02,{color:primary700}]}>Register</Text></Pressable>
        </View>
    </SafeAreaView>
    </Pressable>
  )
}

const styles= StyleSheet.create({
  loginform:{
    alignItems:"center",
    width:"100%",
    marginTop:"auto"
  }
})

export default Login