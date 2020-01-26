import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    container:{
        marginBottom:40,
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: "#40a0fe",
        borderRadius: 5,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 6,
        elevation: 17,
    },
    text:{
        color: "#40a0fe",
        fontSize: 20,
        fontWeight: "bold",
        fontFamily: "Verdana",
        marginTop: 10,
    },
    image:{
        width: 150, 
        height: 150
    }
});

export default style;