import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Metanas from '../screens/Metanas'; 
import Documents from '../screens/Documents'
import MetanasDetails from '../screens/MetanasDetails';
import Folder from '../screens/Folder';
const Stack = createNativeStackNavigator();

export default function navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Metanas" component={Metanas}  options={{ headerShown: false }}/>
        <Stack.Screen name="MetanasDetails" component={MetanasDetails}  options={{ headerShown: false }}/>
        <Stack.Screen name="Documents" component={Documents}  options={{ headerShown: false }}/>
        <Stack.Screen name="Folder" component={Folder}  options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}