import React from 'react';

import {View, StyleSheet, Text, Image, Button, ScrollView, Alert} from 'react-native';
import {DATA} from '../data';
import {THEME} from '../theme';

// Компонент вывода страницы содержания поста
export const PostScreen = ({ route }) => {
  const { postId } = route.params;

  const post = DATA.find(item => item.id === postId);

  const removeHandler = () => {
    Alert.alert(
      'Удаление поста',
      'Вы точно хотите удалить пост?',
      [
        {
          text: 'Отменить',
          style: 'cancel'
        },
        { text: 'Удалить', style: 'destructive', onPress: () => {} }
      ],
      { cancelable: false }
    );
  };

  return (
    <ScrollView>
      <Image source={{uri: post.img}} style={styles.image}/>
      <View style={styles.textWrap}>
        <Text style={styles.title}>{post.text}</Text>
      </View>
      <Button title="Удалить" color={THEME.DANDER_COLOR} onPress={removeHandler}/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  textWrap: {
    padding: 10
  },
  image: {
    width: '100%',
    height: 200
  },
  title: {
    fontFamily: 'open-regular'
  }
});
