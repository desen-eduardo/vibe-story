import { Image, Text, TouchableOpacity, View, Alert } from 'react-native';
import Header from '../../components/header';

import style from './style';
import { useFocusEffect, useRoute } from '@react-navigation/native';
import { useCallback, useState,useContext } from 'react';
import axios from 'axios';
import Loading from '../../components/loading';
import { CartContext } from '../../context/ CartContext';

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
    const [loading,setLoading] = useState<boolean>(false);

    async function getProduct(){
        setLoading(true);
        try { 
            const res = await axios.get(`https://dummyjson.com/products/${param.params.id}`);
            setProduct(res.data);
        } catch (error) {
            Alert.alert('Error', 'Não foi possível completar a ação no momento. Verifique sua internet e tente novamente.');
        } finally {
            setLoading(false);
        }
    } 

    useFocusEffect(
        useCallback(()=>{
            getProduct();
        },[])
    );
    
    const { addItem } = useContext<any>(CartContext);
   
    return(
        <>
            <Header title={product?.category} iconBool={true} />
                { loading ? <Loading /> : 
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
                            <TouchableOpacity style={style.btn} onPress={addItem}>
                                <Text style={style.btnText}>Adicionar</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={style.description}>{product?.description}</Text>
                    </View>
                } 
        </>
    )
}