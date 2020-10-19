import React from 'react';

import {DATA} from '../data';

import {PostList} from '../components/PostList';

// Компонент вывода страницы списка всех постов
export const MainScreen = ({ navigation }) => {
  // Функция открытия поста
  const openPostHandler = (post) => {
    navigation.navigate('Post', { postId: post.id, date: post.date, booked: post.booked });
  };

  return (
    <PostList data={DATA} onOpen={openPostHandler}/>
  );
};
