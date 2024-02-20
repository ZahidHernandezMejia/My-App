import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

interface Props{
    title:string
}




export const Fab = ({title}: Props) => {


    return (
        <TouchableOpacity
            style={styles.fabLocationBL}
            //   onPress={() => setContador(contador + 1)}
            onPress={() => console.log('click')}>
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
