import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'; 

import SignIn from '../pages/SignIn/index';
import SignUp from '../pages/SignUp/index';

const AuthStack = createStackNavigator();

function AuthRoutes(){
    return(
        <AuthStack.Navigator>
            
            <AuthStack.Screen
                name='SignIn'
                component={SignIn}
                options={{
                    headerShown: false,
                }}
            />

            <AuthStack.Screen
                name='SignUp'
                component={SignUp}
                options={{
                    headerStyle:{
                        backgroundColor:'#151515',
                        borderBottomWidth: 1,
                        borderBottomColor: '#00b94a',
                        borderTopWidth: 1,
                        borderTopColor: '#121212',
                    },
                    headerTintColor: '#fff',
                    headerBackTitleVisible: false,
                    headerTitle: 'Voltar',
                }}
            />

        </AuthStack.Navigator>
    );
}

export default AuthRoutes;