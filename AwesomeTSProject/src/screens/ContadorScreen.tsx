import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';

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

      <Button
        
        title="Sumar +1"
        color="#52BFC8"
        accessibilityLabel="Learn more about this purple button"
      />

    </View>
  );
};
