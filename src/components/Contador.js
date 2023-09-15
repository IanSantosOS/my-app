import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';
import estilo from './estilo';

export default function ({ numInicial = 0, passo = 1 }) {
    const [numero, setNumero] = useState(numInicial);
    const incremento = () => setNumero(numero + passo);
    const decremento = () => setNumero(numero - passo);

    return (
        <View style={styles.container}>
            <Text style={estilo.txtG}>{numero}</Text>
            <Button title="+" onPress={incremento} />
            <Button title="-" onPress={decremento} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        flexDirection: 'row'
    }
})