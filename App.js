import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DailyPick from './screens/DailyPick'
import Home from './screens/Home'
import SpaceCraft from './screens/SpaceCraft'
import StarMap from './screens/StarMap'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'

const Stack = createStackNavigator()




export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='SpaceCraft' component={SpaceCraft}/>
        <Stack.Screen name='DailyPick' component={DailyPick}/>
        <Stack.Screen name='StarMap' component={StarMap}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
