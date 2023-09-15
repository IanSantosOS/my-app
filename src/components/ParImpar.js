import { Text, View } from 'react-native';

export default function({ num = 0 }) {
    return (
        <View style={{flexDirection: 'row'}}>
            <Text>O resultado é:</Text>
            {
                num % 2 === 0
                ? <Text> Par</Text>
                : <Text> Ímpar</Text>
            }
        </View>
    )
}