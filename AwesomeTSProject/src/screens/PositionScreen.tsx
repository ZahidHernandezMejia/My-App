import React from 'react'
import { StyleSheet, View } from 'react-native'

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.cajaVerde}/>
        <View style={styles.cajaMorada}/>
        <View style={styles.cajaNaranja}/>
    </View>
  )
}


// Es relativo conforme al padre 
// En la pósicion relativa se invierten 
// Si queremos 
// Arriba: bottom 100 para bajar -100
// Arriba: top -100 para bajar 100
// Derecha: left 100 Izquierda: left-100
// Derecha: right -100 Izquierda: right-100


// Absoluto 
const styles = StyleSheet.create({
    container:{
        flex:1,
        width:400,
        height:400,
        backgroundColor:'#28C4D9',
        // justifyContent:'center',
        // alignItems:'center'
    },
    cajaMorada:{
        width:100,
        height:100,
        backgroundColor:'#5856D6',
        borderWidth:10,
        borderColor:'white',
        position:'absolute',
        right:0
    },
    cajaNaranja:{
        width:100,
        height:100,
        backgroundColor:'#F0A23B',
        borderWidth:10,
        borderColor:'white',
        position:'absolute',
        bottom:0,
        right:0  
    },
    cajaVerde:{
        // width:100,
        // height:100,
        backgroundColor:'green',
        borderWidth:10,
        borderColor:'white',
        // position:'absolute',
        // bottom:0,
        // left:0
        ...StyleSheet.absoluteFillObject  
    },

});