import { Text } from "react-native";

export default ({ min, max }) => {
    const delta = max - min + 1;
    const aleatorio = Math.floor(Math.random() * delta) + min;
    return (
        <Text>Número aleatório entre {min} e {max}: {aleatorio}</Text>
    )
}