import React, { createContext, useState } from 'react';

import firebase from '../services/firebaseConnection';

export const AuthContext = createContext({});

function AuthProvider({ children }) {

    const [user, setUser] = useState(null);

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
                    email: email,
                }
                setUser(data);
            })
            .catch((error)=>{
                console.log(error);
            });
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    return (
        <AuthContext.Provider
            value={{ signed:!!user, user, signUp}}
        >
            {children}
        </AuthContext.Provider>
    );
}
export default AuthProvider;