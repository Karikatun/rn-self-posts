import React, { useState } from 'react';

import {AppLoading} from 'expo';
import {Provider} from "react-redux";
import store from './src/redux/store'

import { bootstrap } from './src/bootstrap';
import { DrawerNavigation } from './src/navigation/AppNavigation';

export default function App() {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={bootstrap}
        onFinish={() => setIsReady(true)}
        onError={err => console.log(err)}
      />
    );
  }

  return (
    <Provider store={store}>
      <DrawerNavigation />
    </Provider>
  );
}
