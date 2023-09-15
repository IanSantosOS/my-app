import { Button, View, StyleSheet } from 'react-native';

export default function (props) {
    return (
        <View style={styles.container}>
            <Button title="+" onPress={props.inc} />
            <Button title="-" onPress={props.dec} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 60,
    }
})