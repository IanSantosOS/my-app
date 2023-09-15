import { View, StyleSheet } from 'react-native';
import Quadrado from './Quadrado';

export default function(props) {
    return (
        <View style={style.FlexV4}>
            <View style={style.V0} />
            <View style={style.V1} />
            <View style={style.V2} />
        </View>
    )
}

const style = StyleSheet.create({
    FlexV4: {
        flexGrow: 1,
        width: 100,
        backgroundColor: '#000'
    },
    // View Secundária
    V0: {
        backgroundColor: '#F00',
        height: 300,
    },
    V1: {
        backgroundColor: '#FF0',
        flexGrow: 1,
    },
    V2: {
        backgroundColor: '#0F0',
        flexGrow: 2,
    }
});