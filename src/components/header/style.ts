 import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
    containerHeader:{
        height:84,
        backgroundColor:'#F59300',
        justifyContent:'space-between',
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
      marginHorizontal:10,
      marginTop: 25
    },
    title:{
        fontFamily:'Roboto-Bold',
        fontSize:24,
        paddingVertical:10,
        paddingHorizontal:10
    },
    align:{
        marginHorizontal:10,
        marginTop: 35
    },
    radius:{
        position:'absolute',
        bottom:-20,
        right:0,
        backgroundColor:'#ccc',
        width:20,
        height:20,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
    }
});

export default style;