import { FlatList } from 'react-native';
import Header from '../../components/header';
import Product from '../../components/product';
import axios from 'axios';
import { useEffect, useState } from 'react';


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

    async function getAllProduct(){
        try {
            const res = await axios.get('https://dummyjson.com/products');
            setProducts(res.data.products);
        } catch (error) {
            console.log(error);
        }
    } 

    useEffect(()=>{
        getAllProduct();
    },[])

    return (
        <>
            <Header title='Listagem de Produtos' iconBool={false}/>
            <FlatList 
                data={products}
                renderItem={({item}) => <Product item={item} />}
                numColumns={2}
            />
        </>
    )
}

