import React, {useState} from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export const ContadorScreen = () => {
  const [contador, setContador] = useState(1);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
      }}>
      <Text
        style={{
          color: 'black',
          textAlign: 'center',
          fontSize: 50,
          // Relative es la propiedad que tiene por defecto
          position: 'relative',
          top: -15,
        }}>
        Contador: {contador}
      </Text>

      {/* <Button
        // onPress={}
        title="Sumar +1"
        color="#52BFC8"
        accessibilityLabel="Learn more about this purple button"
      /> */}
        <TouchableOpacity
        onPress={()=>setContador(contador+1)}
        >
            <View style={{backgroundColor:'#52BFC8'}}>
            <Text style={{color:'black', fontSize:25}}>+1</Text>
            </View>
        </TouchableOpacity>
    </View>
  );
};
