import { Text } from "react-native";

export default function ({ nome, sobrenome }) {
    return (
        <Text style={{fontSize: 24}}>
            {nome} {sobrenome}
        </Text>
    )
}