import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {View, StatusBar} from 'react-native';

import firebase from './src/services/firebaseConnection';
import {Container, TextoTemp} from './src/styles/styles';

import Routes from './src/routes/index';

function App(){
  return(
    <NavigationContainer>
      <StatusBar backgroundColor='#151515' barStyle='light-content'/>
      <Routes/>
    </NavigationContainer>
  );
}

export default App;
