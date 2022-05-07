import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  HomeScreen  from '../screens/HomeScreen';
import { HomeParamlist } from '../types';


const Stack = createNativeStackNavigator<HomeParamlist>();

export default function HomeNavigator() {
  return (
    <Stack.Navigator 
     screenOptions={{
       headerShown: false,
     }}
    >
      <Stack.Screen 
      name="Home" 
      component={HomeScreen}
      options={{
        title: 'Home',
      }} />
     
      </Stack.Navigator>
  );
}