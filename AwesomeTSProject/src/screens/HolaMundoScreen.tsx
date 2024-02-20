import React from 'react'
import { Text, View } from 'react-native'

export const HolaMundoScreen = () => {
  return (
    <View style={{
        // Ocupa toda la pantalla 
        flex:1,
        backgroundColor: 'white',
        // Vertical 
        justifyContent:'center',
      }}>
        <Text style={{
          fontSize:50,
          // Horizontal
          textAlign:"center",
          color:'black'
        }}>Hola mundo</Text>
      </View>
  )
}
