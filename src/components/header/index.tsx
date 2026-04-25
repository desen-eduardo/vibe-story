import { Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import  FontAwesome from '@expo/vector-icons/FontAwesome';

import style from './style';

export default function Header(){
    const navigation = useNavigation();

    return(
        <View style={style.containerHeader}>
            <View style={style.iconHeader}>
                <TouchableOpacity onPress={navigation.goBack}>
                    <FontAwesome name='angle-left' color='#fff' size={30}/>
                </TouchableOpacity>
            </View>
            <Text style={style.titleHeader}>Vibe Story</Text>    
        </View>
    )
}