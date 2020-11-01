import React, {useEffect, useCallback} from 'react';

import {View, StyleSheet, Text, Image, Button, ScrollView, Alert} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import {THEME} from '../theme';
import {removePost, toggleBooked} from "../redux/actions/post";

// Компонент вывода страницы содержания поста
export const PostScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const { postId } = route.params;

  const booked = useSelector(state =>
    state.post.bookedPosts.some(post => post.id === postId)
  );

  const toggleHandler = useCallback(() => {
    dispatch(toggleBooked(postId))
  }, [dispatch, postId])

  useEffect(() => {
    navigation.setParams({ booked })
  }, [booked])

  useEffect(() => {
    navigation.setParams({ toggleHandler })
  }, [])

  const post = useSelector(state => state.post.allPosts.find(p => p.id === postId));

  const removeHandler = () => {
    Alert.alert(
      'Удаление поста',
      'Вы точно хотите удалить пост?',
      [
        {
          text: 'Отменить',
          style: 'cancel'
        },
        { text: 'Удалить', style: 'destructive', onPress() {
            navigation.navigate('Main');
            dispatch(removePost(postId))
          }
        }
      ],
      { cancelable: false }
    );
  };

  if (!post) return null

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
