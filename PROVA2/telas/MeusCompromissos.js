import { View, Text, SectionList, StyleSheet } from 'react-native';

const lista = [
    {
        title: 'Meus Compromissos',
        data: [
            { id: '1', horario: '09h30', descricao: 'Reunião "Daily"' },
            { id: '2', horario: '14h00', descricao: 'Reunião com cliente Carros & Carros' },
            { id: '3', horario: '16h30', descricao: 'Prazo final Projeto X' },
        ]
    }
];

export default function MeusCompromissos() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>(Eu)</Text>
                <Text style={styles.headerText}>Gabriel Storti Segalla</Text>
                <Text style={styles.headerText}>Engenharia de Software</Text>
            </View>
            <SectionList
                sections={lista}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.itemText}>{item.horario}: {item.descricao}</Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#fff' },
    header: { alignItems: 'center', marginBottom: 20 },
    headerText: { fontSize: 18, fontWeight: 'bold' },
    item: { padding: 15, borderBottomWidth: 1, borderBottomColor: '#ccc' },
    itemText: { fontSize: 16 }
});
