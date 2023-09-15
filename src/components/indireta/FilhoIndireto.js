import { Button } from 'react-native';

export default function (props) {
    function gerarNumero(min, max) {
        const fator = max - min;
        return Math.floor(Math.random() * fator) + min;
    }
    return (
        <Button
            title="Clique Aqui"
            onPress={() => {
                const n = gerarNumero(props.min, props.max);
                props.funcao(n);
            }}
        />
    )
}