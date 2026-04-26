import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import style from './style';
import { Products } from '../../screens/home';

type Props = {
    item: Products
}

type Nav = {
    navigate: (router: string, obj:{id: number})=> void,
}

export default function Product(props: Props){
    const navigation = useNavigation<Nav>();
    
    return (
        <View style={style.container}>
            <TouchableOpacity onPress={()=> navigation.navigate('Details',{id:props.item.id})}>
                <View style={style.cardProdut}>
                    <Image 
                        style={{width:151,height:107}}
                        source={{uri:`${props.item.thumbnail}`,}}/>
                    <Text style={style.nameProdut}>{props.item.title}</Text>
                    <Text style={style.PriceProdut}>R$ {props.item.price}</Text>
                </View>  
            </TouchableOpacity>   
        </View>
    )
}