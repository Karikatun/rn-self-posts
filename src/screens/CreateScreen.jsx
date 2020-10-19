import React from 'react';

import {View, StyleSheet, Text} from 'react-native';

// Компонент вывода страницы создания постов
export const CreateScreen = ({}) => {
  return (
    <View style={styles.center}>
      <Text>Создать пост</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
