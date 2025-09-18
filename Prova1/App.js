import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './telas/homeScreen';
import InternetImageScreen from './telas/internetImageScreen';
import LocalImageScreen from './telas/localImageScreen';
import IconsScreen from './telas/iconsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ImagemInternet" component={InternetImageScreen} />
        <Stack.Screen name="ImagemLocal" component={LocalImageScreen} />
        <Stack.Screen name="Icones" component={IconsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}