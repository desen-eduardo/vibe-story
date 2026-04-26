import { ActivityIndicator, Text, View } from 'react-native';
import style from './style';

export default function Loading(){
    return (
        <View style={style.container}>
            <ActivityIndicator size='large'/>
            <Text style={style.text}>Carregando...</Text>
        </View>
    )
}