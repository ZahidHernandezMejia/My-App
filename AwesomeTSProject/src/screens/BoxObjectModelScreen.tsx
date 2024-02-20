import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const BoxObjectModelScreen = () => {
  return (
    <View
      style={styles.container}
    >
      <Text
        style={styles.title}
      >Box Object Model</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
  }
  ,
  title: {
    padding: 0,
    margin:20,
    fontSize: 20,
    // backgroundColor:'red'
    // width:50,
    borderWidth: 5
  }
});