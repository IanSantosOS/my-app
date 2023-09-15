import { Text } from 'react-native';
import Estilo from './estilo';

import If from './If';

export default function (props) {
    const usuario = props.usuario || {};

    return (
        <>
            <If teste={usuario.nome && usuario.email}>
                <Text style={Estilo.txtG}>Usuário Logado:</Text>
                <Text>
                    {usuario.nome} - {usuario.email}
                </Text>
            </If>
        </>
    )
}