import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    container:{
        flex:1,
        margin:5,
        padding:6
    },
    cardProdut:{
        boxSizing:'border-box',
        padding: 10,
        backgroundColor: '#E3DADA',
        width: 173,
        height:185,
        borderRadius: 4
    },
    nameProdut:{
        fontFamily:'Roboto-Regular',
        marginTop: 10,
        fontSize: 14
    },
    PriceProdut:{
        fontFamily:'Roboto-Bold',
        fontSize: 14
    }
});

export default style;