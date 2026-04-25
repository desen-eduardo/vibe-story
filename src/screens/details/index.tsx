import { Image, Text, TouchableOpacity, View } from 'react-native';
import Header from '../../components/header';

import style from './style';

export default function Details() {
    return(
        <View>
            <Header title="Livros" iconBool={true}/>
                <View style={style.container}>
                    <Image 
                    style={{width:'100%',height:'40%'}}
                    source={{uri:'https://img.freepik.com/vetores-gratis/vector-3d-frasco-de-perfume-realista-para-as-mulheres-recipiente-de-vidro-brilhante-com-liquido-rosa_33099-1226.jpg?semt=ais_hybrid&w=740&q=80'}}
                    />
                    <Text style={style.name}>Perfume Boticário</Text>
                    <View style={style.dualColunm}>
                        <View style={style.widthFont}>
                            <Text style={style.small}>R$</Text>
                            <Text style={style.price}>184,99</Text>
                        </View>
                        <TouchableOpacity style={style.btn}>
                            <Text style={style.btnText}>Adicionar</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={style.description}>any case, the structure of the criterion provides a glimpse at The Comprehension of Enhanced Modification
(Sydney Stanfield in The Book of the Systems Approach) By some means, a number of brand new approaches has been tested during the the improvement of the effective time management. All in all, criteria of a number of the content testing method leads us to a clear understanding of an importance of the integrated collection of software engineering standards.  </Text>
                </View>
                    
            
        </View>
    )
}