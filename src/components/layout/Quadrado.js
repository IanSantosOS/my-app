import { View, StyleSheet } from 'react-native';

export default function(props) {
    let tamanho = props.lado || 50;

    return (
        <View style={{
            height: tamanho,
            width: tamanho,
            margin: 5,
            backgroundColor: props.cor || '#999'
        }}/>
    )
}