import * as React from 'react';
import MainStack from './src/navigations/MainStack';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}
