 import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
    containerHeader:{
        height:84,
        backgroundColor:'#F59300',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    },
    titleHeader:{
        fontSize:36,
        color:'#fff',
        marginTop:25,
        fontFamily:'Roboto-Regular'
    },
    iconHeader:{
        position:'absolute',
        left:10,
        top:45
    },
    title:{
        fontFamily:'Roboto-Bold',
        fontSize:24,
        paddingVertical:10,
        paddingHorizontal:10
    }
});

export default style;