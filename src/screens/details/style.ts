import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    container:{
        boxSizing:'border-box',
        paddingHorizontal:10
    },
    name:{
        color:'#636363',
        fontFamily:'Roboto-Bold',
        paddingTop:20
    },
    image:{
        width: 'auto',
        height: '60%'
    },
    dualColunm:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    btn:{
        width:85,
        height:34,
        backgroundColor:'#F59300',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5
    },
    btnText:{
        color:'#fff',
        textTransform:'uppercase',
        fontSize:12
    },
    widthFont:{
        flexDirection:'row',
    },
    small:{
        fontSize:12,
        color:'#636363',
    },
    price:{
        fontSize:16,
        color:'#636363',
    },
    description:{
        marginVertical: 10,
        color:'#636363',
        textAlign:'justify'
    }
})

export default style;