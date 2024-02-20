import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

interface Props{
    // Propiedades 
    title:string;
    // Opcional 
    position?:'br'|'bl';
    // Metodos
    onPress:()=>void;
}




export const Fab = ({title,position='br',onPress}: Props) => {


    return (
        <TouchableOpacity
            style={styles.fabLocationBL}
            // onPress={() => console.log('click')}>
            onPress={onPress}>
            <View style={styles.fab}>
                <Text style={styles.fabText}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    fabLocationBL: {
        position: 'absolute',
        bottom: 25,
        right: 25,
    },
    fabLocationBR: {
        position: 'absolute',
        bottom: 25,
        left: 25,
    },
    fab: {
        backgroundColor: '#51BCC5',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
    },
    fabText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
});
