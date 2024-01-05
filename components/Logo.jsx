import { View, Text, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import {Svg,Path, Circle} from "react-native-svg"
import Animated, {useSharedValue,withSpring,useAnimatedProps, useAnimatedStyle, withRepeat, withDelay} from 'react-native-reanimated'
import { Heading01, alignTopRight, centerItems } from '../styles'
import Colors from "../styles/Colors"
const Logo = ({width,height}) => {
  const offsetY = useSharedValue(0)
  const offsetX = useSharedValue(0)
  const offsetY2 = useSharedValue(0)
  const offsetX2 = useSharedValue(0)

  const [X,setX] =useState(-1.5)
  const [X1,setX1] =useState(-1)
  const [Y,setY] =useState(3)
  const [Y1,setY1] =useState(1.7)

  let handle = ()=>{
    offsetX.value=withRepeat(withSpring(offsetX.value+3),-1,true)
    offsetY.value=withRepeat(withSpring(offsetY.value+3),-1,true)
    // offsetY.value+=20
    // translateY.value+=20
  }
  const handle2 =  ()=>{
    offsetX2.value=withRepeat(withSpring(offsetX2.value+1.5),-1,true)
    offsetY2.value=withRepeat(withSpring(offsetY2.value+1.5),-1,true)
    // offsetY.value+=20
    // translateY.value+=20
  }
  useEffect(()=>{
     setX(-1.5)
     setX1(-1)
     setY(3)
     setY1(1.7)
    handle()
    handle2()

  },[])
  // setInterval(()=>{handle()},1000)
  const AnimatedPath= Animated.createAnimatedComponent(Path)

  const style = useAnimatedStyle(()=>({
    transform:[{translateX:offsetX.value},{translateY:offsetY.value}]
  }))
  const style2 = useAnimatedStyle(()=>({
    transform:[{translateX:offsetX2.value},{translateY:offsetY2.value}]
  }))

  // const animatedProps = useAnimatedProps(()=>{
  //  return{ translateX:withSpring(translateX.value),
  //           translateY:withSpring(translateY.value)}
  // })
  // const  
  return (
    <View style={centerItems}>
      
      {/* Logo */}
      <Svg width={width} height={height} viewBox="0 0 57 66" fill="none" xmlns="http://www.w3.org/2000/svg">
        <AnimatedPath
            style={style}
              // translateX={20}
              x={X} y={Y}
            d="M16.1816 54.3456L2.31591 11.7454L23.3118 4.91156C27.7341 3.47217 31.4189 3.28238 34.3663 4.34219C37.3005 5.36143 39.2298 7.29106 40.1542 10.1311C41.039 12.8494 40.7246 15.3298 39.211 17.5724C37.6842 19.7744 35.3178 21.4644 32.1116 22.6426L33.1417 25.8072C36.8601 24.6866 40.1194 24.568 42.9197 25.4514C45.7067 26.2942 47.6086 28.2776 48.6254 31.4016C49.7347 34.8096 49.2197 37.9835 47.0806 40.9233C44.9414 43.863 41.4578 46.1187 36.6298 47.6901L16.1816 54.3456ZM17.0531 25.5921L26.7903 22.4228C31.0909 21.023 32.7394 18.7814 31.7358 15.6979C31.2076 14.0751 30.2835 13.097 28.9636 12.7639C27.671 12.3769 25.9496 12.5334 23.7993 13.2333L14.0621 16.4026L17.0531 25.5921ZM22.9361 43.6668L32.7951 40.4578C37.7448 38.8468 39.6452 36.2764 38.4964 32.7466C37.3343 29.1763 34.2784 28.1967 29.3286 29.8078L19.4697 33.0167L22.9361 43.6668Z" fill="#F87E4A"/>
        <AnimatedPath x={X1} y={Y1} style={style2} d="M15.8496 55.7031L1.98388 13.1028L22.9797 6.26898C27.402 4.82959 31.0869 4.6398 34.0343 5.69961C36.9685 6.71885 38.8978 8.64848 39.8222 11.4885C40.7069 14.2068 40.3925 16.6872 38.879 18.9298C37.3522 21.1318 34.9857 22.8219 31.7796 24L32.8096 27.1646C36.5281 26.0441 39.7874 25.9255 42.5876 26.8088C45.3747 27.6516 47.2766 29.635 48.2934 32.759C49.4027 36.1671 48.8877 39.341 46.7485 42.2807C44.6094 45.2205 41.1257 47.4761 36.2977 49.0475L15.8496 55.7031ZM16.7211 26.9495L26.4583 23.7802C30.7589 22.3804 32.4074 20.1388 31.4038 17.0554C30.8755 15.4325 29.9515 14.4545 28.6315 14.1213C27.339 13.7343 25.6176 13.8908 23.4673 14.5907L13.7301 17.76L16.7211 26.9495ZM22.6041 45.0242L32.463 41.8153C37.4128 40.2042 39.3132 37.6338 38.1643 34.1041C37.0023 30.5337 33.9463 29.5541 28.9966 31.1652L19.1377 34.3741L22.6041 45.0242Z" fill="#455E87"/>
        <Path   d="M14.8496 57.7031L0.983881 15.1028L21.9797 8.26898C26.402 6.82959 30.0869 6.6398 33.0343 7.69961C35.9685 8.71885 37.8978 10.6485 38.8222 13.4885C39.7069 16.2068 39.3925 18.6872 37.879 20.9298C36.3522 23.1318 33.9857 24.8219 30.7796 26L31.8096 29.1646C35.5281 28.0441 38.7874 27.9255 41.5876 28.8088C44.3747 29.6516 46.2766 31.635 47.2934 34.759C48.4027 38.1671 47.8877 41.341 45.7485 44.2807C43.6094 47.2205 40.1257 49.4761 35.2977 51.0475L14.8496 57.7031ZM15.7211 28.9495L25.4583 25.7802C29.7589 24.3804 31.4074 22.1388 30.4038 19.0554C29.8755 17.4325 28.9515 16.4545 27.6315 16.1213C26.339 15.7343 24.6176 15.8908 22.4673 16.5907L12.7301 19.76L15.7211 28.9495ZM21.6041 47.0242L31.463 43.8153C36.4128 42.2042 38.3132 39.6338 37.1643 36.1041C36.0023 32.5337 32.9463 31.5541 27.9966 33.1652L18.1377 36.3741L21.6041 47.0242Z" fill="#1E293B"/>
      </Svg>

      {/* Brikoli */}
      <Svg width="97" height="24" viewBox="0 0 97 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M0.688 23V0.599998H11.728C14.0533 0.599998 15.8347 1.08 17.072 2.04C18.3093 2.97867 18.928 4.19467 18.928 5.688C18.928 7.11733 18.3947 8.248 17.328 9.08C16.2613 9.89067 14.8747 10.328 13.168 10.392V12.056C15.1093 12.0987 16.6773 12.5467 17.872 13.4C19.0667 14.232 19.664 15.4693 19.664 17.112C19.664 18.904 18.928 20.3333 17.456 21.4C15.984 22.4667 13.9787 23 11.44 23H0.688ZM5.552 9.464H10.672C12.9333 9.464 14.064 8.65333 14.064 7.032C14.064 6.17867 13.776 5.57067 13.2 5.208C12.6453 4.824 11.8027 4.632 10.672 4.632H5.552V9.464ZM5.552 18.968H10.736C13.3387 18.968 14.64 18.04 14.64 16.184C14.64 14.3067 13.3387 13.368 10.736 13.368H5.552V18.968Z" fill="#F87E4A"/>
        <Path d="M23.208 23V7H27.304C27.304 8.70667 26.8453 10.328 25.928 11.864H27.848C28.2533 10.0507 28.8507 8.73867 29.64 7.928C30.4293 7.096 31.6347 6.68 33.256 6.68C33.7893 6.68 34.1093 6.69067 34.216 6.712V11.384C33.5973 11.32 33.0107 11.288 32.456 11.288C30.7493 11.288 29.5333 11.6933 28.808 12.504C28.104 13.3147 27.752 14.7653 27.752 16.856V23H23.208ZM36.766 4.824V0.535999H41.598V4.824H36.766ZM36.926 23V7H41.47V23H36.926ZM57.705 23L52.713 16.344L50.377 18.616V23H45.833V0.599998H50.377V7.672C50.377 9.144 50.1957 10.264 49.833 11.032C49.4917 11.8 48.905 12.536 48.073 13.24L49.289 14.552L56.809 7H62.377L55.849 13.336L63.433 23H57.705ZM62.7138 15C62.7138 12.4827 63.5031 10.4453 65.0818 8.888C66.6604 7.30933 68.6764 6.52 71.1298 6.52C73.6044 6.52 75.6204 7.30933 77.1778 8.888C78.7564 10.4453 79.5458 12.4827 79.5458 15C79.5458 17.56 78.7671 19.6187 77.2098 21.176C75.6524 22.7333 73.6258 23.512 71.1298 23.512C68.7191 23.512 66.7138 22.712 65.1138 21.112C63.5138 19.4907 62.7138 17.4533 62.7138 15ZM73.8178 18.68C74.4791 17.848 74.8098 16.6427 74.8098 15.064C74.8098 13.4853 74.4791 12.2693 73.8178 11.416C73.1778 10.5413 72.2818 10.104 71.1298 10.104C69.9778 10.104 69.0711 10.5413 68.4098 11.416C67.7698 12.2693 67.4498 13.4853 67.4498 15.064C67.4498 16.6427 67.7698 17.848 68.4098 18.68C69.0711 19.4907 69.9778 19.896 71.1298 19.896C72.2818 19.896 73.1778 19.4907 73.8178 18.68ZM82.8643 23V0.599998H87.4083V23H82.8643ZM91.641 4.824V0.535999H96.473V4.824H91.641ZM91.801 23V7H96.345V23H91.801Z" fill="#292627"/>
      </Svg>
  




    </View>
  )
}

export default Logo