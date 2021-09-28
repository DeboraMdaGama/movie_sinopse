import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
        marginRight: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    modalContainer: {
        height: '70%',
        width:'95%',
        backgroundColor: '#121212',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    },
    goBackButton: {
        backgroundColor: '#E52246',
        padding: 10,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    },
    title: {
        textAlign: 'center',
        color: '#FFF',
        padding: 10,
        fontSize: 28,
        fontWeight: 'bold',
        marginTop:10,
        marginBottom:10
    },
    sinopse: {
        color: '#FFF',
        fontSize: 20,
        marginLeft: 10,
        marginBottom:30
    },
    description: {
        color: '#FFF',
        marginLeft: 20,
        marginRight: 20,
        lineHeight:20,
        fontSize:15,
    }
});