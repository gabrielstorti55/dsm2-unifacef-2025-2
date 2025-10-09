import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import BasicExample from './screens/BasicExample';
import FormValidation from './screens/FormValidation';
import DadosCadastrados from './screens/DadosCadastrados'; 

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Início" component={HomeScreen} />
        <Stack.Screen name="Exemplo Básico" component={BasicExample} />
        <Stack.Screen name="Formulário de Validação" component={FormValidation} />
        <Stack.Screen name="Dados Cadastrados" component={DadosCadastrados} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
