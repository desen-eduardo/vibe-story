import { FlatList, StyleSheet, Text } from 'react-native';
import Header from '../../components/header';
import Product from '../../components/product';

const produtos = [1,2,3,4,5];

export default function Home() {
    return (
        <>
            <Header />
            <Text style={style.titleProduct}>Listagem de Produtos</Text>
            <FlatList 
                data={produtos}
                renderItem={({item}) => <Product />}
                numColumns={2}
            />
        </>
    )
}

const style = StyleSheet.create({
    titleProduct:{
        fontFamily:'Roboto-Bold',
        fontSize:24,
        paddingVertical:10,
        paddingHorizontal:10
    }
})

