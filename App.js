import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function App(){
  return(
    <View style={styles.container}>

      <Text style={styles.texto_temp}>Repositório git</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2d2d2d'
  },
  texto_temp:{
    color: '#fff',
    fontSize: 28,
  },
});

export default App;
