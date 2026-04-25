import { Text, View, TouchableOpacity, StatusBar } from "react-native";
import { useNavigation } from '@react-navigation/native';
import  FontAwesome from '@expo/vector-icons/FontAwesome';

import style from './style';

type Props = {
    title:string,
    iconBool?:boolean
}

export default function Header(props: Props){
    const navigation = useNavigation();

    return(
        <>
         <StatusBar
          hidden={true}
          ></StatusBar>
            <View style={style.containerHeader}>
                <View style={style.iconHeader}>
                    { props.iconBool &&
                        <TouchableOpacity onPress={navigation.goBack}>
                            <FontAwesome name='angle-left' color='#000' size={30}/>
                        </TouchableOpacity>
                    }
                </View>
                <Text style={style.titleHeader}>Vibe Story</Text>    
            </View>
            <View>
                 <Text style={style.title}>{props.title}</Text>
            </View>
        </>
    )
}