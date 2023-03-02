import * as React from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';
import Constants from 'expo-constants';

import MyStack from './navigation/Stacknavigation';

import { NavigationContainer } from '@react-navigation/native';
import Home  from './src/Home';
import { Card } from 'react-native-paper';

export default function App() {
  return (
    // <NavigationContainer>
    //   <MyStack />
    // </NavigationContainer>
    <Home></Home>
  );
}



