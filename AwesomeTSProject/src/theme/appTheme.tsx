import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    fondo: {
        flex: 1,
        backgroundColor: 'black',
    },
    calculadoraContainer: {
        paddingHorizontal: 20,
        backgroundColor: 'blue',
        flex: 1,
        justifyContent: "flex-end",

    },
    resultado: {
        color: 'white',
        fontSize: 60,
        textAlign: 'right',
        marginBottom:10
    },
    resultadoPeque: {
        color: 'rgba(255,255,255,0.5)',
        fontSize: 30,
        textAlign: 'right'
    },
    fila:{
        flexDirection:"row",
        justifyContent:'center',
        marginBottom:18,
        paddingHorizontal:10
    },
    boton: {
        height: 80,
        width: 80,
        borderRadius: 100,
        justifyContent: 'center',
        backgroundColor: '#ADB8B8',
        marginHorizontal:10
    },
    botonTexto: {
        textAlign:'center',
        fontSize:30,
        color:'black',
        fontWeight:'300',
    }
});
