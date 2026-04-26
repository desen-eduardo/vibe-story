import { Alert, FlatList } from 'react-native';
import Header from '../../components/header';
import Product from '../../components/product';
import axios from 'axios';
import { useCallback, useState } from 'react';
import Loading from '../../components/loading';
import { useFocusEffect } from '@react-navigation/native';


export type Products = {
    id:number,
    title:string,
    description:string,
    category: string,
    price: number,
    thumbnail:string
};

export default function Home() {
    const [products,setProducts] = useState<Products[]>([]);
    const [loading,setLoading] = useState<boolean>(false);

    async function getAllProduct(){
        setLoading(true);
        try {
            const res = await axios.get('https://dummyjson.com/products');
            setProducts(res.data.products);
        } catch (error) {
            Alert.alert('Error', 'Não foi possível completar a ação no momento. Verifique sua internet e tente novamente.');
        } finally {
            setLoading(false);
        }
    } 

   useFocusEffect(
       useCallback(()=>{
            getAllProduct();
        },[])
   );

    return (
        <>
            <Header title='Listagem de Produtos' iconBool={false}/>
            {loading ? <Loading /> : <FlatList 
                    data={products}
                    renderItem={({item}) => <Product item={item} />}
                    numColumns={2}
                />
            }
        </>
    )
}

