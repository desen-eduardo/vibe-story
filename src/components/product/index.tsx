import { Image, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import style from './style';

export default function Product(){
    const navigation = useNavigation();
    
    function navDetails(){
        navigation.navigate('Details');
    }

    return (
        <View style={style.container}>
            <View>
                <TouchableOpacity onPress={navDetails}>
                    <View style={style.cardProdut}>
                        <Image 
                            style={{width:151,height:107}}
                            source={{uri:'https://img.freepik.com/vetores-gratis/vector-3d-frasco-de-perfume-realista-para-as-mulheres-recipiente-de-vidro-brilhante-com-liquido-rosa_33099-1226.jpg?semt=ais_hybrid&w=740&q=80',}}/>
                        <Text style={style.nameProdut}>Perfume Boticário</Text>
                        <Text style={style.PriceProdut}>R$ 125,99</Text>
                    </View>  
                </TouchableOpacity>
            </View>    
        </View>
    )
}