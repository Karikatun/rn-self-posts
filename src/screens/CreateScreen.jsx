import React, {useState} from 'react';

import {View, StyleSheet, Text, TextInput, Image, Button, ScrollView, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {useDispatch} from "react-redux";

import {addPost} from "../redux/actions/post";

import {THEME} from "../theme";

// Компонент вывода страницы создания постов
export const CreateScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const createPostHandler = () => {
    const post = {
      date: new Date().toJSON(),
      text: text,
      img: 'https://static.coindesk.com/wp-content/uploads/2019/01/shutterstock_1012724596-860x430.jpg',
      booked: false
    };
    dispatch(addPost(post));
    navigation.navigate('Main')
  }

  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>Создай новый пост</Text>
          <TextInput
            style={styles.textarea}
            placeholder={'Введите текст поста'}
            value={text}
            onChangeText={setText}
            multiline
          />
          <Image source={{uri: 'https://static.coindesk.com/wp-content/uploads/2019/01/shutterstock_1012724596-860x430.jpg'}}/>
          <Button title={'Создать пост'} color={THEME.MAIN_COLOR} onPress={createPostHandler}/>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 10
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'open-regular',
    marginVertical: 10
  },
  textarea: {
    padding: 10,
    marginBottom: 10
  }
});
