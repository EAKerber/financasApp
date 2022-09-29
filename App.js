import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthProvider from './src/contexts/auth';
import { } from './src/styles/styles';
import Routes from './src/routes/index';

import { StatusBar } from 'react-native';




import { LogBox } from 'react-native';
LogBox.ignoreLogs(["AsyncStorage has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-async-storage/async-storage' instead of 'react-native'. See https://github.com/react-native-async-storage/async-storage"]);

function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor='#151515' barStyle='light-content' />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}

export default App;
