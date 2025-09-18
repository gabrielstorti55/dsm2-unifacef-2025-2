import { View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function IconsScreen() {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', flex: 1 }}>
      <MaterialIcons name="home" size={60} color="red" />
      <MaterialIcons name="star" size={60} color="green" />
      <MaterialIcons name="person" size={60} color="blue" />
    </View>
  );
}