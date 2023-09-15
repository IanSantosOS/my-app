import { Text } from 'react-native';

export default function(props) {
    return (
        <>
            <Text style={{fontSize: 24, fontWeight: '900'}}>Membros da Família:</Text>
            {props.children}
        </>
    )
}