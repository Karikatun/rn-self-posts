import React, {useState} from 'react';

import {View, StyleSheet, Text, TextInput, Button, ScrollView, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {useDispatch} from 'react-redux';

import {PhotoPicker} from '../components/PhotoPicker';

import {addPost} from '../redux/actions/post';

import {THEME} from '../theme';

// Компонент вывода страницы создания постов
export const CreateScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const [image, setImage] = useState('');

  const createPostHandler = () => {
    const post = {
      date: new Date().toJSON(),
      text: text,
      img: image,
      booked: false
    };
    dispatch(addPost(post));
    navigation.navigate('Main');
  };

  const photoPickHandler = (uri) => {
    setImage(uri);
  };

  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>Создать новый пост</Text>
          <TextInput
            style={styles.textarea}
            placeholder={'Введите текст поста'}
            value={text}
            onChangeText={setText}
            multiline
          />
          <PhotoPicker onPick={photoPickHandler}/>
          <Button
            title={'Создать пост'}
            color={THEME.MAIN_COLOR}
            onPress={createPostHandler}
            disabled={!text || !image}/>
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
