import { View, Text, Pressable, StyleSheet, SafeAreaView, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import { useAuth } from '../app/context/AuthContext'
import { Heading01, Heading02, Heading03, HeadingS, Paragraph01, Paragraph02, alignTopRight, alignbottomLeft, centerItems, columns, fullcenterItems, spaceBetween } from '../styles'
import Logo from '../components/Logo'
import { Path, Svg } from 'react-native-svg'
import { dark, primary700, secondary200 } from '../styles/Colors'
import YButton from '../components/YButton'
import { StackActions } from '@react-navigation/native'

const Welcome = ({navigation}) => {
  const {authState,} =useAuth()
  const winWidth = Dimensions.get('window').width
  const winHeight = Dimensions.get('window').height
  useEffect(()=>{
    
    const isAuth=()=>{
      if(authState.authenticated)
        navigation.navigate("home")
    }
    isAuth()
  },[])
  return (
    <SafeAreaView  style={[fullcenterItems]}>
        {/* doodle top right */}
        <View style={[alignTopRight,]}>
          <Svg style={[alignTopRight,styles.doodleTop]}  width="205" height="466" viewBox="0 0 205 466" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M0.683741 83.2298L3.78357 59.5202C8.45417 23.7964 34.1909 -5.59294 68.9862 -14.9361L88.5018 -20.1764C160.695 -39.5617 232.724 11.4736 238.37 86.0109L266.985 463.806C265.919 450.59 251.807 442.604 239.91 448.552L214.068 461.471C188.767 474.119 159 455.721 159 427.435V413.5C159 402.217 154.912 391.316 147.493 382.815L136.083 369.741C121.31 352.813 119.833 328.045 132.489 309.482L149.068 285.167C159.865 269.331 151.944 247.555 133.515 242.29C116.642 237.469 108.254 218.491 116.102 202.796C124.363 186.274 114.661 166.419 96.5501 162.784L51.1114 153.664C18.397 147.098 -3.6419 116.315 0.683741 83.2298Z" fill="#F87E4A"/>
          </Svg>

          <Svg style={[alignTopRight,styles.doodleTop]} width="217" height="459" viewBox="0 0 217 459" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path stroke="#1E293B" strokeWidth="2" d=" M1.29011 97.5948L1.99317 67.9447C2.78427 34.5819 20.9873 4.06933 49.9697 -12.4752L61.625 -19.1286C133.011 -59.8791 223.228 -17.6751 237.699 63.2395L306.502 447.961C304.149 434.804 289.179 428.262 277.926 435.473L253.6 451.062C229.784 466.323 198.233 451.187 195.232 423.06L193.753 409.204C192.556 397.984 187.335 387.579 179.056 379.913L166.323 368.123C149.837 352.859 145.741 328.387 156.357 308.586L170.262 282.649C179.318 265.757 169.131 244.945 150.247 241.664C132.958 238.661 122.604 220.68 128.743 204.24C135.204 186.936 123.45 168.222 105.056 166.529L58.906 162.281C25.6796 159.223 0.499132 130.952 1.29011 97.5948Z" />
          </Svg>

        </View>

        {/* doodle bottom left */}
        <View style={[alignbottomLeft,styles.doodleBottom]}>
          <Svg style={alignbottomLeft} width="189" height="221" viewBox="0 0 189 221" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path strokeWidth="23" d="M14.7865 87.2042L15.16 70.0004C15.9884 31.8388 -14.9132 0.394181 -53.0832 0.174447C-94.5917 -0.0645068 -127.262 36.137 -122.334 77.3527L-120.183 95.3481C-118.343 110.744 -112.334 125.314 -102.835 137.57C-49.339 206.59 38.1525 321.997 50.49 348.424C60.4141 369.682 123.534 320.234 178.018 270.694C199.615 251.056 187.022 216.041 157.947 213.456L132.832 211.223C116.235 209.747 107.953 190.395 118.343 177.37C128.412 164.747 120.976 145.961 104.996 143.649L56.6701 136.658C32.2207 133.121 14.2503 111.902 14.7865 87.2042Z" fill="#1E293B"/>
          </Svg>
          <Svg style={alignbottomLeft} width="198" height="216" viewBox="0 0 198 216" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path stroke="#F87E4A" strokeWidth="3" d="M-62.4813 2.33959L-70.0767 2.83412C-110.033 5.43564 -141.081 38.6534 -140.982 78.694L-140.918 104.636C-140.856 130.137 -131.384 154.669 -114.415 173.705C-55.8644 239.385 29.505 337.341 42.8507 361.338C54.4903 382.267 128.701 315.185 186.496 255.529C206.807 234.565 191.978 200.707 162.792 200.185L137.583 199.733C120.923 199.435 111.293 180.717 120.737 166.989C129.888 153.686 121.142 135.473 105.038 134.297L56.3387 130.74C31.7004 128.941 12.2745 109.046 11.0628 84.3723L10.2188 67.1851C8.34661 29.0604 -24.3913 -0.140422 -62.4813 2.33959Z" />
          </Svg>

        </View>


        <View style={[centerItems,columns,spaceBetween,{height:winHeight*.7}]}>
          {/* hero text */}
            <View  style={[centerItems,columns]}>
              <Logo width={60} height={70} textSize={97} animated={false} />
              <Text style={[HeadingS,{color:primary700}]}>B<Text style={[HeadingS,{color:dark}]}>rikoli</Text></Text>
              <Text style={[Paragraph01,styles.punchLine]}>Where Skills Meet Opportunities.</Text>
            </View>

            {/* call to action */}
          <View  style={[centerItems,columns,]}>
            <YButton onPress={()=>{navigation.navigate("login")}}  title="Login" color={primary700} W={winWidth*.82} />
            {/*----------or----------- */}
            <View>
              <Text style={[Paragraph01,{color:secondary200}]}>Or</Text>
            </View>

            <YButton onPress={()=>{navigation.navigate("register")}} title="Sing up" color={secondary200} W={winWidth*.82} />
          </View>
        </View>

    </SafeAreaView>
  )
}
const styles= StyleSheet.create({
  doodleTop:{
    top:-150,
    right:-10
  },
  doodleBottom:{
    bottom:-20,
  },
  punchLine:{
    width:200,
    textAlign:"center",
    lineHeight:20
  }
})
export default Welcome