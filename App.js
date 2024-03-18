import { NavigationContainer } from '@react-navigation/native';
import { StackScreen } from './src/Constants/stackScreen';
import { Text, View } from 'react-native';
import React from 'react';

const App = () => {
  return (
    <NavigationContainer>
      <StackScreen />
    </NavigationContainer>
  );
}

export default App
