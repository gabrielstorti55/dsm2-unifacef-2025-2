import { View, Image, Button, StyleSheet } from 'react-native';

export default function InternetImageScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://geosemfronteiras.org/wp-content/webp-express/webp-images/uploads/2023/06/%E2%80%94-Imagem-CanvaReproducao-10-1024x597.jpg.webp' }}
        style={styles.image}
      />
      <Button title="Voltar para Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#132350ff', justifyContent: 'center', alignItems: 'center' },
  image: { width: 300, height: 200, marginBottom: 20 }
});