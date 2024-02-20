import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Fab } from '../components/Fab';

export const ContadorScreen = () => {
  const [contador, setContador] = useState(1);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Contador: {contador}
      </Text>
      <Fab
        title="+1"
      />
      {/* <Button
        // onPress={}
        title="Sumar +1"
        color="#52BFC8"
        accessibilityLabel="Learn more about this purple button"
      /> */}

      {/* <TouchableOpacity
      style={styles.fabLocationBR}
      onPress={() => setContador(contador - 1)}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>-1</Text>
        </View>
      </TouchableOpacity> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center'
  },
  title: {
    color: 'black',
    textAlign: 'center',
    fontSize: 50,
    // Relative es la propiedad que tiene por defecto
    position: 'relative',
    top: -15,
  },
});
