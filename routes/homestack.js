import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Login from '../screens/Login';
import Signup from '../screens/signup';
import Homepage from '../screens/homepage'
import Swipe from '../screens/swipe'
import Special from '../screens/special';
import Women from '../screens/women';
import Home from './home';

const Stack = createStackNavigator();

 export default function Homestack() {
     return (
          <NavigationContainer>
              <Stack.Navigator screenOptions={{headerShown: false}}>
                  <Stack.Screen name="first" component={Swipe}  />
                  <Stack.Screen name="second" component={Signup} />
                  <Stack.Screen name="third" component={Homepage} />
                  <Stack.Screen name="forth" component={Special} />
                  <Stack.Screen name="home" component={Home} />
              </Stack.Navigator>
          </NavigationContainer>
     )
 }
