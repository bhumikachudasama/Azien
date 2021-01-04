/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  ImageBackground,
  ScrollView,

} from 'react-native';
import Homepage from './screens/homepage';
import Login from './screens/Login';
import Signup from './screens/signup';
import Swipe from './screens/swipe';
import Navigator from './routes/homestack';
import Homestack from './routes/homestack';
import Women from './screens/women';
import Men from './screens/men';


// import {
//   FilledTextField,
// } from 'react-native-material-textfield';
export default function App() { 
  return (
    // <Signup></Signup>
    // <Swipe></Swipe>
    // <Homepage></Homepage>
    <Homestack />
    // <Login></Login>
    // <Women></Women>
    // <Men></Men>
  );
}
    

