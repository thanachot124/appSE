import * as React from 'react';
import MyStack from './Navigation/Stacknavigation';
import { NavigationContainer } from '@react-navigation/native';
export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}



