import React, { useState, useContext } from 'react';
import { Platform, ActivityIndicator } from 'react-native';

import { AuthContext } from '../../contexts/auth';

import {
  AreaInput, Background,
  Container, Input,
  SubmitButton,
  SubmitText,
} from './styles';

function SignUp() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signUp, checking } = useContext(AuthContext);

  function handleSignUp(){
    signUp(email, password, name);
  }

  return (
    <Background>
      <Container
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enabled
      >

        <AreaInput>
          <Input
            placeholder='Nome'
            autoCorrect={false}
            autoCapitalize='none'
            value={name}
            onChangeText={(text) => setName(text)}
          />
        </AreaInput>

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
          onPress={handleSignUp}
        >
          {checking?
            (<ActivityIndicator size={25} color='#fff'/>):
            (<SubmitText>Cadastrar</SubmitText>)
          }
        </SubmitButton>

      </Container>
    </Background>
  );
}

export default SignUp;