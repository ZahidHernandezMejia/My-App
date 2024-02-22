import React from 'react'
import { StatusBar, Text, View } from 'react-native'
import { styles } from '../../theme/appTheme'

export const CalculadoraScreen = () => {
  return (
    <View>
        <StatusBar
        backgroundColor={'black'}
        barStyle={'light-content'}
        />
        <Text style={styles.texto}>
        CalculadoraScreen
        </Text>
    </View>
  )
}
