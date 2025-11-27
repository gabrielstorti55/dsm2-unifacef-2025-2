import { View, Text, SectionList, StyleSheet } from 'react-native';

const lista = [
    {
        title: '(Eu)',
        data: [
            { id: '10', horario: '09h30', descricao: 'Reunião "Daily"' },
            { id: '11', horario: '14h00', descricao: 'Reunião com cliente Carros & Carros' },
            { id: '12', horario: '16h30', descricao: 'Prazo final Projeto X' },
        ]
    },
    {
        title: 'Jurema (chefe)',
        data: [
            { id: '1', horario: '09h30', descricao: 'Reunião "Daily"' },
            { id: '2', horario: '12h00', descricao: 'Almoço com a diretoria' },
            { id: '3', horario: '15h00', descricao: 'Saída viagem' },
        ]
    },
    {
        title: 'Aderbal',
        data: [
            { id: '4', horario: '09h30', descricao: 'Reunião "Daily"' },
            { id: '5', horario: '13h30', descricao: 'Visita técnica Uni-FACEF' },
            { id: '6', horario: '16h30', descricao: 'Prazo final Projeto X' },
        ]
    }
];

export default function CompromissosEquipe() {
    return (
        <View style={styles.container}>
            <View style={styles.header}> 
                <Text style={styles.headerText}>Gabriel Storti Segalla</Text>
                <Text style={styles.headerText}>Engenharia de Software</Text>
            </View>
            <SectionList
                sections={lista}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.itemText}>{item.horario}: {item.descricao}</Text>
                    </View>
                )}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.sectionHeader}>{title}</Text>
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
    itemText: { fontSize: 16 },
    sectionHeader: { fontSize: 20, fontWeight: 'bold', backgroundColor: '#f0f0f0', padding: 10, marginTop: 10, textAlign: 'center' }
});
