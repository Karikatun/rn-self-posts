import React from "react";

import {Platform} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import {HeaderButtons, Item} from 'react-navigation-header-buttons';

import AppHeaderIcon from '../AppHeaderIcon';

import { MainScreen } from '../screens/MainScreen';
import { PostScreen } from '../screens/PostScreen';

import {THEME} from "../theme";

const Stack = createStackNavigator();

export default function AppNavigation () {
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
              <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                <Item title='Take photo' iconMain='ios-camera' onPress={() => console.log('press photo')}/>
              </HeaderButtons>
            ),
          }}/>

        <Stack.Screen
          name={'Post'}
          component={PostScreen}
          options={({ route }) => ({ title: 'Пост от ' + new Date(route.params.date).toLocaleDateString() })}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

