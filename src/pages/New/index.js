import React, { useState, useContext } from 'react';
import { SafeAreaView, Keyboard } from 'react-native';

import {
    Background, Input, KeyboardDismiss,
    SubmitButton, SubmitText,
} from './styles';

import { AuthContext } from '../../contexts/auth';
import Header from '../../components/Header/index';
import Picker from '../../components/Picker';

function New() {

    
    const [value, setValue] = useState(null);
    const [type, setType] = useState('receita');
    const { user, signOut } = useContext(AuthContext);

    return (
        <KeyboardDismiss
        onPress={()=>{Keyboard.dismiss()}}
        >
            <Background>
                <Header/>

                <SafeAreaView style={{ alignItems:'center', }} >
                    <Input 
                        value={value}
                        placeholder='Valor desejado'
                        keyboardType='numeric'
                        returnKeyType='next'
                        onChangeText={(value)=>setValue(value)}
                        onSubmitEditing={()=>{Keyboard.dismiss()}}
                    />
                    <Picker onChange={setType} type={type}/>

                    <SubmitButton
                        onPress={()=>{}}
                    >
                        <SubmitText>Registar</SubmitText>
                    </SubmitButton>

                </SafeAreaView>
            </Background>
        </KeyboardDismiss>
    );
}

export default New;