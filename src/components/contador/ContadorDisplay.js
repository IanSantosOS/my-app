import { View, Text, StyleSheet } from 'react-native';

export default function (props) {
    return (
        <View style={styles.display}>
            <Text style={styles.displayText}>
                {props.num}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    display: {
        backgroundColor: '#000',
        padding: 5,
        width: 100
    },
    displayText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20
    }
})