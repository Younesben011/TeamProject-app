import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput } from 'react-native';
import Register from './screens/Register';
import { AuthProvider, useAuth } from './app/context/AuthContext';
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Login from './screens/Login';
import Home from './screens/Home';
const  Stack = createNativeStackNavigator();

// const container =sty.container

export default function App() {
  return (
    <AuthProvider>
      <Layout></Layout>
    </AuthProvider>
  );
}


export const  Layout =()=>{
  const {authState,} =useAuth()
  return(
    <NavigationContainer>
        <Stack.Navigator>
        {authState.authenticated?(
          <Stack.Screen name="home" component={Home}></Stack.Screen>
        ):(
          <Stack.Screen name="login" component={Login}></Stack.Screen>
        )
          }
          <Stack.Screen name="register" component={Register}></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

