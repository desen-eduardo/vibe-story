import { Text, View, TouchableOpacity, StatusBar } from "react-native";
import { useNavigation } from '@react-navigation/native';
import  FontAwesome from '@expo/vector-icons/FontAwesome';
import { CartContext } from '../../context/ CartContext';
import { useContext } from 'react';

import style from './style';

type Props = {
    title?:string,
    iconBool?:boolean,
}

export default function Header(props: Props){
    const navigation = useNavigation<any>();
     const { count } = useContext<any>(CartContext);

    return (
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
                <View style={style.align}>
                    <FontAwesome name='cart-plus' color='#000' size={30}/>
                    <View style={style.radius}>
                        <Text>{count}</Text>
                    </View>
                </View>
            </View>
            <View>
                 <Text style={style.title}>{
                    props.title === 'Listagem de Produtos' ? props.title : `Category ${props?.title?.charAt(0).toUpperCase()}${props?.title?.slice(1)}`
                 }</Text>
            </View>
        </>
    )
}