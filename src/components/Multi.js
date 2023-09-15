import { Text, StyleSheet } from 'react-native';

function Componente() {
    return <Text style={styles.campOFC}>Comp #Oficial</Text>
}

function Componente1() {
    return <Text style={styles.camp01}>Comp #01</Text>
}

function Componente2() {
    return <Text style={styles.camp02}>Comp #02</Text>
}

const styles = StyleSheet.create({
    campOFC: {
        fontWeight: '800',
        fontSize: 18,
        marginTop: 24
    },
    camp01: {
        fontWeight: '700',
        fontSize: 16,
        marginTop: 16
    },
    camp02: {
        fontWeight: '600',
        fontSize: 14,
        marginTop: 12
    }
});

export { Componente1, Componente2 };
export default Componente;