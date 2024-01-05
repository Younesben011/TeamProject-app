import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput, SafeAreaView } from 'react-native';
import Register from './screens/Register';
import { AuthProvider, useAuth } from './app/context/AuthContext';
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Login from './screens/Login';
import Home from './screens/Home';
import SplashScreen from './screens/SplashScreen';
import {useFonts}from 'expo-font'
import Welcome from './screens/Welcome';
import AppLoading from 'expo-app-loading';
import { useState } from 'react';
import { primary700 } from './styles/Colors';
// import * as SplashScreen from "expo-splash-screen"

const  Stack = createNativeStackNavigator();

// const container =sty.container
export default function App() {
  // JS\Application_mobile\brikoliApp\assets\fonts\WhyteInktrap-Black.ttf
  const [fontsLoaded]= useFonts({
    'WhyteBlack' : require('./assets/fonts/WhyteInktrap-Black.ttf'),
    'WhyteBold' : require('./assets/fonts/WhyteInktrap-Bold.ttf'),
    'WhyteRegular' : require('./assets/fonts/WhyteInktrap-Regular.ttf'),
  })
  const SplashScreenTime=5
  const [hideSplash,sethideSplash]=useState(false)

  setTimeout(()=>{sethideSplash(true)},SplashScreenTime*1000)

  if(!fontsLoaded||!hideSplash)
    return <SplashScreen/>

  return (

      <AuthProvider>
      <StatusBar backgroundColor={primary700} barStyle={"dark-content"}  />
        <Layout></Layout>
      </AuthProvider>

  );
}


export const  Layout =()=>{
  const {authState,} =useAuth()

  return(
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="welcome" component={Welcome}></Stack.Screen> 
          <Stack.Screen name="login" component={Login}></Stack.Screen>          
          <Stack.Screen  name="home" component={Home}></Stack.Screen>
          <Stack.Screen name="register" component={Register}></Stack.Screen> 
          <Stack.Screen  name="SplashScreen" component={SplashScreen}></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

