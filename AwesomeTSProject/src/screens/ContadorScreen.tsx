import React, {useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

export const ContadorScreen = () => {
  const [contador, setContador] = useState(1);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Contador: {contador}
      </Text>

      {/* <Button
        // onPress={}
        title="Sumar +1"
        color="#52BFC8"
        accessibilityLabel="Learn more about this purple button"
      /> */}
      <TouchableOpacity onPress={() => setContador(contador + 1)}>
        <View style={styles.buttonIncrement}>
          <Text style={{color: 'black', fontSize: 25}}>+1</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center'
    },
    title:{
        color: 'black',
        textAlign: 'center',
        fontSize: 50,
        // Relative es la propiedad que tiene por defecto
        position: 'relative',
        top: -15,
    },
    buttonIncrement:{
        backgroundColor: '#52BFC8',
    }
});
