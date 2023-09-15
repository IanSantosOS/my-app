import { Button } from 'react-native';

export default function (props) {
    function executarExec1() {
        console.warn("Exec tipo 1");
    }
    const executarExec2 = () => console.warn("Exec tipo 2");

    return (
        <>
            <Button title="Executar #01" onPress={executarExec1} />
            <Button title="Executar #02" onPress={executarExec2} />
            <Button title="Executar #03" onPress={function () { console.warn('Exec tipo 3') }} />
            <Button title="Executar #04" onPress={() => { console.warn('Exec tipo 4') }} />
        </>
    )
}