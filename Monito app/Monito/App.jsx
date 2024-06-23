import React from 'react';
import { Text, View } from "react-native";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Signin from "./pages/Signin";
import Home from "./pages/Home";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabs from './components/BottomTabs';
import PetDetails from './pages/PetDetails';
import Cart from './pages/Cart';

const Stack = createStackNavigator();

function App() {

  return (

    <NavigationContainer>

      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="BottomTabs" component={BottomTabs} />
        <Stack.Screen name="PetDetails" component={PetDetails} />

      </Stack.Navigator>

    </NavigationContainer>

  )
}
export default App;
