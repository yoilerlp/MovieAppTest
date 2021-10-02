import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import MovieDetails from '../screens/MovieDetails';
import {RouteProp} from '@react-navigation/native';

export type StacksScreens = {
  Home: undefined;
  MovieDetails: {id: number};
};

export type MoviesStackProp = NativeStackNavigationProp<StacksScreens>;
export type MovieDetailsScreenProps = RouteProp<StacksScreens, 'MovieDetails'>;
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
