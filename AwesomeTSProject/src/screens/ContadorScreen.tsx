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
      <TouchableOpacity
      style={styles.fabLocationBL}
      onPress={() => setContador(contador + 1)}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>+1</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
      style={styles.fabLocationBR}
      onPress={() => setContador(contador - 1)}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>-1</Text>
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
    fabLocationBL:{
        position:'absolute',
        bottom:25,
        right:25,
    },
    fabLocationBR:{
        position:'absolute',
        bottom:25,
        left:25,
    },
    fab:{
        backgroundColor:'#51BCC5',
        width:60,
        height:60,
        borderRadius:100,
        justifyContent:'center'
    },
    fabText:{
        color: 'white',
        fontSize: 25,
        fontWeight:'bold',
        alignSelf:'center'
    }
});
