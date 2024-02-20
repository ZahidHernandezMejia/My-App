import React from "react";
import { Text, View } from "react-native";

const App = () => {
  return (
    <View style={{
      // Ocupa toda la pantalla 
      flex:1,
      backgroundColor: 'red',
      // Vertical 
      justifyContent:'center',
    }}>
      <Text style={{
        fontSize:50,
        // Horizontal
        textAlign:"center"
      }}>Hola mundo</Text>
    </View>
  )
}

export default App;