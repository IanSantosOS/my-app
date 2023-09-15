import { View, Text, StyleSheet } from 'react-native';
import Estilo from '../estilo';

export default function({num}) {
    return (
        <View style={style.bola}>
            <View style={style.detalheBranco}>
                <Text style={Estilo.txtG}>
                    {num}
                </Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    bola: {
        display: 'flex',
        width: 70,
        height: 70,
        margin: 5,
        borderRadius: 45,
        backgroundColor: "#000",
        justifyContent: 'center',
        alignItems: 'center'
    },
    detalheBranco: {
        display: 'flex',
        width: 40,
        height: 40,
        marginBottom: 10,
        borderRadius: 20,
        backgroundColor: "#FFF",
        justifyContent: 'center'
    }
})