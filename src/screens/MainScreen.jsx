import React from 'react'

import {View, StyleSheet, Text, Button, FlatList} from 'react-native'
import {HeaderButtons, Item} from 'react-navigation-header-buttons';

import AppHeaderIcon from '../AppHeaderIcon';
import {DATA} from "../data";

import Post from "../components/Post";

export const MainScreen = ({ navigation }) => {
  const openPostHandler = (post) => {
    navigation.navigate('Post', { postId: post.id, date: post.date })
  }

  return (
    <View style={styles.wrapper}>
      <FlatList data={DATA}
                keyExtractor={(post => post.id.toString())}
                renderItem={({item}) => {
        return <Post post={item} onOpen={openPostHandler}/>
      }}/>
    </View>
  )
}

MainScreen.navigationOptions = {
  headerTitle: 'Мой блог'
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 10
  }
})
