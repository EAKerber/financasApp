import React, { useState, useContext } from 'react';
import { Platform, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { AuthContext } from '../../contexts/auth';
import {
  AreaInput, Background,
  Container, Input, Link,
  LinkText, Logo, SubmitButton,
  SubmitText,
} from './styles';

function SignIn() {

  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn, checking } = useContext(AuthContext);

  function handleSignIn(){
    signIn(email, password);
  }

  return (
    <Background>
      <Container
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enabled
      >

        <Logo source={require('../../assets/Logo.png')} />

        <AreaInput>
          <Input
            placeholder='Email'
            autoCorrect={false}
            autoCapitalize='none'
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </AreaInput>

        <AreaInput>
          <Input
            secureTextEntry={true}
            placeholder='Senha'
            autoCorrect={false}
            autoCapitalize='none'
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </AreaInput>

        <SubmitButton
          onPress={handleSignIn}
        > 
          {checking?
            (<ActivityIndicator size={25} color='#fff'/>):
            (<SubmitText>Acessar</SubmitText>)
          }
        </SubmitButton>

        <Link onPress={() => navigation.navigate('SignUp')}>
          <LinkText>Criar uma conta!</LinkText>
        </Link>

      </Container>
    </Background>
  );
}

export default SignIn;