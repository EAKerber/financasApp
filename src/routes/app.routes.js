import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer'; 

import Home from '../pages/Home/index';

const AppDrawer = createDrawerNavigator();

function AppRoutes(){
    return(
        <AppDrawer.Navigator nitialRouteName="Home" >
            
            <AppDrawer.Screen
                name='Home'
                component={Home}
            />

        </AppDrawer.Navigator>
    );
}

export default AppRoutes;