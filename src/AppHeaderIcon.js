import React from 'react'

import { HeaderButton } from 'react-navigation-header-buttons'
import { Platform } from 'react-native'

import { Ionicons } from '@expo/vector-icons';

import {THEME} from './theme';

export default function AppHeaderIcon ({props}) {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={24}
      color={Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR}
    />
  )
}
