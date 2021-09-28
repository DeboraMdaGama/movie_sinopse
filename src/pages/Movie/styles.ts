
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        backgroundColor: 'black',
    },
    card: {
        backgroundColor: '#121212',
        margin: 15,
        elevation: 2
    },
    imageCard:{
        height:258,
        zIndex:2
    },
    cardTitle:{
        padding:15,
        fontSize:18,
        color:'white'
    }, 
    buttonContainer:{
        flexDirection:'column',
        alignItems:'flex-end',
        justifyContent:'flex-start',
        marginTop:-45,
        zIndex:9
    },
    buttonContent:{
        width:120,
        backgroundColor:'#191970',
        opacity:1,
        padding:10,
        borderBottomLeftRadius:5,
        borderTopLeftRadius:5
    },
    buttonText:{
        color:'white',
        textAlign:'center'
    }
});
