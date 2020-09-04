import React from 'react'

import {View, StyleSheet, Text, Button} from 'react-native'

export const MainScreen = ({navigation}) => {
  return (
    <View style={styles.center}>
      <Text>MainScreen</Text>
      <Button onPress={() => navigation.navigate('Post')} title='To PostScreen' />
    </View>
  )
}

MainScreen.navigationOptions = {
  headerTitle: 'Мой блог'
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
