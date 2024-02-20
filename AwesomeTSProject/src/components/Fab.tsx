import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet, TouchableNativeFeedback, Platform } from 'react-native';

interface Props {
    // Propiedades 
    title: string;
    // Opcional 
    position?: 'br' | 'bl';
    // Metodos
    onPress: () => void;
}




export const Fab = ({ title, position = 'br', onPress }: Props) => {


    const ios = () => {
        return (
            <View>
                <TouchableOpacity    
                activeOpacity={0.8}     
                style={[
                    styles.fabLocation,
                    (position === 'bl')
                        ? styles.left
                        : styles.right
                ]}
                onPress={onPress}
                >
                    <View style={styles.fab}>
                        <Text style={styles.fabText}>{title}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
    const android = () => {
        return (
            <View
                style={[
                    styles.fabLocation,
                    (position === 'bl')
                        ? styles.left
                        : styles.right
                ]}
            >
                <TouchableNativeFeedback
                    // onPress={() => console.log('click')}>
                    onPress={onPress}
                    background={TouchableNativeFeedback.Ripple('#459FA7', true, 30)}
                >
                    <View style={styles.fab}>
                        <Text style={styles.fabText}>{title}</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    }
    return (Platform.OS==='ios') ? ios() : android() ;
};

const styles = StyleSheet.create({
    fabLocation: {
        position: 'absolute',
        bottom: 25,
        right: 25,
    },
    right: {
        right: 25,
    },
    left: {
        left: 25,
    },
    fab: {
        backgroundColor: '#51BCC5',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
    },
    fabText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
});
