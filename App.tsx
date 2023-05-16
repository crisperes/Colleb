<<<<<<< HEAD
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import {StatusBar} from 'react-native'
import FontLoad from './src/helpers/fontsLoad'

export default function App() {
  return (
      <NavigationContainer>
          <StatusBar backgroundColor="#000" barStyle="light-content"/>
          <FontLoad/>
      </NavigationContainer>
  );
}
=======
import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#38A69D" barStyle="light-content"/>
      <Routes/>
    </NavigationContainer>
  );
}

>>>>>>> origin/master
