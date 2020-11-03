import React, {useEffect} from 'react';

import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {PostList} from '../components/PostList';

import {useDispatch, useSelector} from 'react-redux';
import {loadPosts} from '../redux/actions/post';

import {THEME} from '../theme';

// Компонент вывода страницы списка всех постов
export const MainScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  const allPosts = useSelector(state => state.post.allPosts);
  const loading = useSelector(state => state.post.loading);

  // Функция открытия поста
  const openPostHandler = (post) => {
    navigation.navigate('Post', { postId: post.id, date: post.date, booked: post.booked });
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator color={THEME.MAIN_COLOR}/>
      </View>
    );
  }

  return (
    <PostList data={allPosts} onOpen={openPostHandler}/>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
