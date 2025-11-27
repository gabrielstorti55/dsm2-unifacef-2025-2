import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inicio from './telas/Inicio';
import MeusCompromissos from './telas/MeusCompromissos';
import CompromissosEquipe from './telas/CompromissosEquipe';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="Meus compromissos" component={MeusCompromissos} />
        <Stack.Screen name="Compromissos da equipe" component={CompromissosEquipe} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
