import { Text } from 'react-native';
import Estilo from '../estilo';

import produtos from './produtos';

export default function(props) {
    function obterLista() {
        return produtos.map((produto) => {
            return <Text key={produto.id}>{produto.id}) {produto.nome} tem R${produto.preco}</Text>
        })
    }
    return (
        <>
            <Text style={Estilo.txtG}>Lista de Produtos:</Text>
            {obterLista()}
        </>
    )
}