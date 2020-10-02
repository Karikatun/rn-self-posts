import React from "react";

import {Platform, StyleSheet, TouchableWithoutFeedback} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';

import { MainScreen } from '../screens/MainScreen';
import { PostScreen } from '../screens/PostScreen';
import { BookedScreen } from '../screens/BookedScreen';

import {THEME} from "../theme";

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

export function AppNavigation () {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'MainScreen'}
        screenOptions={{
          headerStyle: {
            backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff'
          },
          headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR
        }}>
        <Stack.Screen
          name={'Main'}
          component={MainScreen}
          options={{
            title: 'Мой блог',
            headerRight: () => (
              <TouchableWithoutFeedback onPress={() => console.log('press photo')}>
                <Ionicons name="ios-camera" size={24} color={Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR} style={styles.rightHeaderButton} />
              </TouchableWithoutFeedback>
            ),
            headerLeft: () => (
              <TouchableWithoutFeedback onPress={() => console.log('press drawer')}>
                <Ionicons name="ios-menu" size={24} color={Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR} style={styles.leftHeaderButton} />
              </TouchableWithoutFeedback>
            ),
          }}/>

        <Stack.Screen
          name={'Post'}
          component={PostScreen}
          options={({ route: { params: { date, booked } } }) => ({
            title: 'Пост от ' + new Date(date).toLocaleDateString(),
            headerRight: () => (
              <TouchableWithoutFeedback onPress={() => console.log('press photo')}>
                <Ionicons
                  name={booked ? "ios-star" : 'ios-star-outline'}
                  size={24} color={Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR}
                  style={styles.rightHeaderButton}
                />
              </TouchableWithoutFeedback>
            ),
          })}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export function BottomNavigation () {
  return (
    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen
          name='Booked'
          component={BookedScreen}/>

        <BottomTab.Screen
          name={'Post'}
          component={PostScreen}/>
      </BottomTab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  rightHeaderButton: {
    marginRight: 15
  },
  leftHeaderButton: {
    marginLeft: 15
  },
})

