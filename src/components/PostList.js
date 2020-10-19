import React from 'react';

import { View, StyleSheet, FlatList } from 'react-native';

import Post from '../components/Post';

// Компонент вывода списка постов
export const PostList = ({ data, onOpen }) => {
  return (
    <View style={styles.wrapper}>
      <FlatList data={data}
                keyExtractor={(post => post.id.toString())}
                renderItem={({item}) => {
                  return <Post post={item} onOpen={onOpen}/>;
                }}/>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 10
  }
});
