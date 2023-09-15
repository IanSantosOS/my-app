import { useState } from 'react';
import { View, TextInput, Text } from 'react-native';
import Estilo from "./estilo"

export default function(props) {
    const [nome, setNome] = useState('');

    return (
        <View>
            <Text style={Estilo.txtG}>{nome}</Text>
            <TextInput
                placeholder='Digite seu Nome'
                value={nome}
                onChangeText={nome => setNome(nome)}
            />
        </View>
    )
}