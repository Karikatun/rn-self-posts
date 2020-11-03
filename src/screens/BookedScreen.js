import React from 'react';

import {useSelector} from 'react-redux';

import { PostList } from '../components/PostList';

// Компонент вывода страницы списка избранных постов
export const BookedScreen = ({ navigation }) => {
  const bookedPosts = useSelector(state => state.post.bookedPosts);
  // Функция открытия поста
  const openPostHandler = (post) => {
    navigation.navigate('Post', { postId: post.id, date: post.date, booked: post.booked });
  };

  return (
    <PostList data={bookedPosts} onOpen={openPostHandler}/>
  );
};
