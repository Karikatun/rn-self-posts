import React from 'react';

import {View, StyleSheet, Text} from 'react-native';

// Компонент вывода страницы информации о приложении
export const AboutScreen = ({}) => {
  return (
    <View style={styles.center}>
      <Text>Это лучшее приложение для личных заметок</Text>
      <Text>Версия приложения <Text style={styles.versions}>1.0.0</Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  versions: {
    fontFamily: 'open-bold'
  }
});
