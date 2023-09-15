import { Text } from 'react-native';
import Estilo from '../estilo';
import Filho from './FilhoDireto';

export default function () {
    let x = 13;
    let y = 100;
    return (
        <>
            <Text style={Estilo.txtG}>Comunicação Direta</Text>
            <Filho a={x} b={y} />
            <Filho a={x + 100} b={y + 200} />
        </>
    )
}