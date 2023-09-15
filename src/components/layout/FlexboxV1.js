import { View, StyleSheet } from 'react-native';
import Quadrado from './Quadrado';

export default function(props) {
    return (
        <View style={style.FlexV1}>
            <Quadrado/>
            <Quadrado cor="#803490"/>
            <Quadrado cor="#F00"/>
            <Quadrado cor="#0F0"/>
            <Quadrado cor="#00F"/>
        </View>
    )
}

const style = StyleSheet.create({
    FlexV1: {
        flexGrow: 1,
        justifyContent: 'space-between',
        backgroundColor: '#000'
    }
});