import { View, Image, StyleSheet } from 'react-native';

export default function LocalImageScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/favicon.png')}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  image: { width: 200, height: 200 }
});