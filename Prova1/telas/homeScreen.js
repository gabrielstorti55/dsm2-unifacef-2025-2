import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Gabriel Storti Segalla</Text>
            <View style={styles.buttonContainer}>
                <Button title="Imagem da Internet" onPress={() => navigation.navigate('ImagemInternet')} />
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Imagem Local" onPress={() => navigation.navigate('ImagemLocal')} />
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Ícones Coloridos" onPress={() => navigation.navigate('Icones')} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    title: { fontSize: 24, marginBottom: 20 },
    buttonContainer: { marginVertical: 8, width: '70%' }
});