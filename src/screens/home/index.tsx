import { FlatList } from 'react-native';
import Header from '../../components/header';
import Product from '../../components/product';

const produtos = [1,2,3,4,5];

export default function Home() {
    return (
        <>
            <Header title='Listagem de Produtos' iconBool={false}/>
            <FlatList 
                data={produtos}
                renderItem={({item}) => <Product />}
                numColumns={2}
            />
        </>
    )
}

