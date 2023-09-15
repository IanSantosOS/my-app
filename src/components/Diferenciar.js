import { Text, Platform } from 'react-native';
import Estilo from './estilo';

export default function(props) {
    if (Platform.OS === 'android') {
        return <Text style={Estilo.txtG}>Android</Text>
    }
    else if (Platform.OS === 'ios') {
        return <Text style={Estilo.txtG}>iOS</Text>
    }
    else {
        return <Text style={Estilo.txtG}>Você utiliza o famoso {Platform.OS}... Brabo 😎</Text>
    }
}