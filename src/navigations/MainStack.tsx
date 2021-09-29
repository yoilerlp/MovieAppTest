import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import MovieDetails from '../screens/MovieDetails';

export type StacksScreens = {
  Home: undefined;
  MovieDetails: undefined;
};

export type MoviesStackProp = NativeStackNavigationProp<StacksScreens>;

const Stack = createNativeStackNavigator<StacksScreens>();

const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="MovieDetails" component={MovieDetails} />
    </Stack.Navigator>
  );
};
export default MainStack;
