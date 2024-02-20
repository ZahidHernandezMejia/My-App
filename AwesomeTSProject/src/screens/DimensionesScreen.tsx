import React from 'react'
import { Dimensions, StyleSheet, Text, View, useWindowDimensions } from 'react-native'

// const { width, height } = Dimensions.get('window');

export const DimensionesScreen = () => {
    const { width, height } = useWindowDimensions();
    return (
        <View>
            <View style={styles.container}>
                <View style={{
                    ...styles.cajaMorada,
                    width:width*0.5
                    // width:width*1
                }} />
                <View style={styles.cajaNaranja} />
            </View>
            <Text style={styles.title}>W:{width} H:{height}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        color: 'black',
        fontSize:25,
        textAlign:'center'
    },
    container: {
        width: '100%',
        height: 300,
        backgroundColor: 'red',
    },
    cajaMorada: {
        backgroundColor: '#8000ff',
        width: '50%',
        height: '50%'
    },
    cajaNaranja: {
        backgroundColor: 'F0A23B'
    }
});