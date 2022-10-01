import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../pages/Home/index';
import New from '../pages/New/index';
import Profile from '../pages/Profile/index';

const AppDrawer = createDrawerNavigator();

function AppRoutes() {
    return (
        <AppDrawer.Navigator
            drawerStyle={{
                backgroundColor: '#191919',
            }}
            drawerContentOptions={{
                labelStyle: {
                    fontWeight: 'bold',
                },
                activeTintColor: '#fff',
                activeBackgroundColor: '#00b94a',
                inactiveBackgroundColor: 'rgba(15,15,15,0.70)',
                inactiveTintColor: 'rgba(255,255,255,0.50)',
                itemStyle: {
                    marginVertical: 5,
                },
            }}
        >

            <AppDrawer.Screen
                name='Home'
                component={Home}
            />

            <AppDrawer.Screen
                name='Perfil'
                component={Profile}
            />

            <AppDrawer.Screen
                name='Resgistrar'
                component={New}
            />

        </AppDrawer.Navigator>
    );
}

export default AppRoutes;