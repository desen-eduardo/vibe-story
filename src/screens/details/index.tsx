import { Image, Text, TouchableOpacity, View, Alert } from 'react-native';
import Header from '../../components/header';

import style from './style';
import { useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import axios from 'axios';

type Product = {
    id: number,
    title: string,
    description: string,
    category: string,
    price: number,
    images: string
};

export default function Details() {
    const [product,setProduct] = useState<Product>();

    const param = useRoute<any>();

    async function getProduct(){
        try { 
            const res = await axios.get(`https://dummyjson.com/products/${param.params.id}`);
            setProduct(res.data);
        } catch (error) {
            Alert.alert('Error', 'Houver erro de comunicação com api');
        }
    } 

    useEffect(()=>{
        getProduct();
    });

    return(
        <View>
            <Header title={product?.category} iconBool={true}/>
                <View style={style.container}>
                    <Image 
                    style={style.image}
                    source={{uri:`${product?.images[0]}`}}
                    />
                    <Text style={style.name}>{product?.title}</Text>
                    <View style={style.dualColunm}>
                        <View style={style.widthFont}>
                            <Text style={style.small}>R$</Text>
                            <Text style={style.price}>{product?.price}</Text>
                        </View>
                        <TouchableOpacity style={style.btn}>
                            <Text style={style.btnText}>Adicionar</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={style.description}>{product?.description}</Text>
                </View>
                    
            
        </View>
    )
}