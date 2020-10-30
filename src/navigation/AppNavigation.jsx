import React from 'react';

import {Platform, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Ionicons } from '@expo/vector-icons';

import { MainScreen } from '../screens/MainScreen';
import { PostScreen } from '../screens/PostScreen';
import { BookedScreen } from '../screens/BookedScreen';

import {THEME} from '../theme';
import {AboutScreen} from '../screens/AboutScreen';
import {CreateScreen} from '../screens/CreateScreen';

const Stack = createStackNavigator();
const BottomTab = Platform.OS === 'ios' ? createBottomTabNavigator() : createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();

const navigatorOptions = (
  <Stack.Screen
    name={'Post'}
    component={PostScreen}
    options={({ route: { params: { date, booked, toggleHandler } } }) => ({
      title: 'Пост от ' + new Date(date).toLocaleDateString(),
      headerRight: () => (
        <TouchableWithoutFeedback onPress={toggleHandler}>
          <Ionicons
            name={booked ? 'ios-star' : 'ios-star-outline'}
            size={24} color={Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR}
            style={styles.rightHeaderButton}
          />
        </TouchableWithoutFeedback>
      ),
    })}
  />
);

const stackScreenOptions = {
  screenOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff'
    },
    headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR
  }
};

const getNavigationOptions = () => {
  if (Platform.OS === 'ios') {
    //Props for the ios navigator
    return {
      initialRouteName: 'MainNavigation',
      tabBarOptions: { activeTintColor: THEME.MAIN_COLOR },
    };
  }
  //Props for any other OS navigator
  return {
    initialRouteName: 'MainNavigation',
    shifting: true,
    tabBarOptions: { activeTintColor: '#fff' },
    barStyle: { backgroundColor: THEME.MAIN_COLOR }
  };
};

// Вывод иконки бокового меню
const renderDrawerIcon = (navigation) => (
  <TouchableWithoutFeedback onPress={() => navigation.toggleDrawer()}>
    <Ionicons name="ios-menu" size={24} color={Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR} style={styles.leftHeaderButton} />
  </TouchableWithoutFeedback>
);

// Навигация на главной странице
const MainNavigation = ({ navigation }) => {
  return (
    <Stack.Navigator {...stackScreenOptions}>
      <Stack.Screen
        name={'Main'}
        component={MainScreen}
        options={{
          title: 'Мой блог',
          headerRight: () => (
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Create')}>
              <Ionicons name="ios-camera" size={24} color={Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR} style={styles.rightHeaderButton} />
            </TouchableWithoutFeedback>
          ),
          headerLeft: () => renderDrawerIcon(navigation),
        }}/>

      {navigatorOptions}
    </Stack.Navigator>
  );
};

// Навигация на странице информации о приложении
const AboutNavigation = ({ navigation }) => {
  return (
    <Stack.Navigator {...stackScreenOptions}>
      <Stack.Screen
        name={'About'}
        component={AboutScreen}
        options={{
          title: 'О приложении',
          headerLeft: () => renderDrawerIcon(navigation),
        }}/>
    </Stack.Navigator>
  );
};

// Навигация на странице создания нового поста
const CreateNavigation = ({ navigation }) => {
  return (
    <Stack.Navigator {...stackScreenOptions}>
      <Stack.Screen
        name={'Create'}
        component={CreateScreen}
        options={{
          title: 'Создать пост',
          headerLeft: () => renderDrawerIcon(navigation),
        }}/>
    </Stack.Navigator>
  );
};

// Навигация на странице избранных постов
const BookedNavigation = ({ navigation }) => {
  return (
    <Stack.Navigator {...stackScreenOptions}>
      <Stack.Screen
        name={'Booked'}
        component={BookedScreen}
        options={{
          title: 'Избранное',
          headerLeft: () => renderDrawerIcon(navigation),
        }}/>

      {navigatorOptions}
    </Stack.Navigator>
  );
};

// Нижние табы на главной странице
const BottomNavigation = () => {
  return (
    <BottomTab.Navigator {...getNavigationOptions()}>
      <BottomTab.Screen
        name={'Все'}
        component={MainNavigation}
        options={{
          tabBarIcon: ({color}) => (<Ionicons name="ios-albums" size={25} color={color}/>)
        }}/>

      <BottomTab.Screen
        name="Избранное"
        component={BookedNavigation}
        options={{
          tabBarIcon: ({color}) => (<Ionicons name="ios-star" size={25} color={color}/>)
        }}/>
    </BottomTab.Navigator>
  );
};

// Навигация бокового меню
export function DrawerNavigation () {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerType="back"
        drawerContentOptions={{
          activeTintColor: THEME.MAIN_COLOR,
          labelStyle: {
            fontFamily: 'open-bold'
          }
        }}>
        <Drawer.Screen
          name="Главная"
          component={BottomNavigation}
          options={{
            // drawerIcon: () => (<Ionicons name={'ios-star'}/>)
          }}/>

        <Drawer.Screen
          name="О приложении"
          component={AboutNavigation}/>

        <Drawer.Screen
          name="Создать пост"
          component={CreateNavigation}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  rightHeaderButton: {
    marginRight: 15
  },
  leftHeaderButton: {
    marginLeft: 15
  },
});

