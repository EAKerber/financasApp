import React, { useState, useContext } from 'react';
import { SafeAreaView, Keyboard, Alert } from 'react-native';

import {
    Background, Input, KeyboardDismiss,
    SubmitButton, SubmitText,
} from './styles';

import { useNavigation } from '@react-navigation/native';

import firebase from '../../services/firebaseConnection';
import { format } from 'date-fns';

import { AuthContext } from '../../contexts/auth';
import Header from '../../components/Header/index';
import Picker from '../../components/Picker';

function New() {

    
    const [value, setValue] = useState(null);
    const [type, setType] = useState('null');

    const navigator = useNavigation();

    const { user } = useContext(AuthContext);

    function handleSubmit(){
        Keyboard.dismiss();
        if(isNaN(parseFloat(value))){
            alert('Digite um valor válido');
            return;
        }
        if(type==='null'){
            alert('Selecione um tipo');
            return;
        }

        Alert.alert(
            'Confirmando dados:',
            `Tipo: ${type} - Valor: R$ ${parseFloat(value)}`,
            [
                {
                    text: 'Cancelar',
                    style: 'cancel',
                },
                {
                    text: 'Continuar',
                    onPress: ()=>handleAdd(),
                }
            ]
        );
    }

    async function handleAdd(){
        uid = user.uid;

        //Adicionando registro

        let key = await firebase.database().ref('history').child(uid).push().key;
        await firebase.database().ref('history').child(uid).child(key).set({
            value: parseFloat(value),
            type: type,
            date: format(new Date(), 'dd/MM/yy'),
        }).catch((error)=>{
            console.log(error);
        });

        //Buscando Saldo

        let userData = firebase.database().ref('users').child(uid);
        await userData.once('value')
        .then((snapshot)=>{
            //Modificando Saldo
            let newSaldo = parseFloat(snapshot.val().saldo);

            type === 'receita'? 
            newSaldo += parseFloat(value): 
            newSaldo -= parseFloat(value);
            
            userData.child('saldo').set(newSaldo);        
        })
        .catch((error)=>{
            console.log(error);
        });

        Keyboard.dismiss();

        setValue('');   
        setType('null');

        navigator.navigate('Home');
    }

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
                        onChangeText={(value)=>{setValue(value)}}
                        onSubmitEditing={()=>{Keyboard.dismiss()}}
                    />
                    <Picker onChange={setType} type={type}/>

                    <SubmitButton
                        onPress={handleSubmit}
                    >
                        <SubmitText>Registar</SubmitText>
                    </SubmitButton>

                </SafeAreaView>
            </Background>
        </KeyboardDismiss>
    );
}

export default New;