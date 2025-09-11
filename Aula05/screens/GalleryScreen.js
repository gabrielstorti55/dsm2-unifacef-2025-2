import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function GalleryScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Ícone de câmera no topo */}
      <View style={styles.header}>
        <FontAwesome name="camera" size={40} color="#4a90e2" />
        <Text style={styles.title}>Galeria</Text>
      </View>

      {/* Imagens da internet */}
      <View style={styles.imagesContainer}>
        <Image
          source={{ uri: 'https://picsum.photos/id/1015/200/200' }}
          style={styles.image}
        />
        <Image
          source={{ uri: 'https://picsum.photos/id/1025/200/200' }}
          style={styles.image}
        />
        <Image
          source={{ uri: 'https://picsum.photos/id/1035/200/200' }}
          style={styles.image}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  imagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});
