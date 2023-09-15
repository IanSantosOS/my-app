import { useState } from 'react';
import { Text } from 'react-native';
import Estilo from '../estilo';
import Filho from './FilhoIndireto';

export default function () {
    const [num, setNum] = useState(0);

    function exibirValor(numero) {
        // console.warn(numero);
        setNum(numero);
    }

    return (
        <>
            <Text style={Estilo.txtG}>Comunicação Indireta</Text>
            <Text>{num}</Text>
            <Filho
                min={10}
                max={20}
                funcao={exibirValor}
            />
        </>
    )
}