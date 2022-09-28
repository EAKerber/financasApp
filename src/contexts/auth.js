import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useState, useEffect } from 'react';

import firebase from '../services/firebaseConnection';
import asynckey from '../services/asyncstorageKey';

export const AuthContext = createContext({});

function AuthProvider({ children }) {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        async function loadUser(){
            let data = await retriveUser();
            data&&setUser(data);
            setLoading(false);            
        }
        loadUser();
    },[]);

    //logar usuário

    async function signIn(email, password){
        await firebase.auth().signInWithEmailAndPassword(email, password)
        .then(async (value)=>{
            let uid = value.user.uid;
            await firebase.database().ref('users').child(uid).once('value')
            .then((snapshot)=>{
                let data = {
                    uid: uid,
                    nome: snapshot.val().nome,
                    email: value.user.email,
                }
                setUser(data);
                storageUser(data);
            })
            .catch((error)=>{
                console.log(error);
            });
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    //criar conta

    async function signUp(email, password, name){
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(async (value)=>{
            let uid = value.user.uid;
            await firebase.database().ref('users').child(uid)
            .set({
                saldo: 0,
                nome: name,
            })
            .then(()=>{
                let data = {
                    uid: uid,
                    nome: name,
                    email: value.user.email,
                }
                setUser(data);
                storageUser(data);
            })
            .catch((error)=>{
                console.log(error);
            });
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    //Salvar usuário logado

    async function storageUser(data){
        await AsyncStorage.setItem(asynckey, JSON.stringify(data))
        .then((responce)=>{return responce})
        .catch((error)=>{console.log(error)});
    }

    //Buscar usuário salvo

    async function retriveUser(){
        return await AsyncStorage.getItem(asynckey)
        .then((response)=>{return JSON.parse(response)})
        .catch((error)=>{console.log(error)});
    }

    return (
        <AuthContext.Provider
            value={{ signed:!!user, user, loading, signUp, signIn}}
        >
            {children}
        </AuthContext.Provider>
    );
}
export default AuthProvider;