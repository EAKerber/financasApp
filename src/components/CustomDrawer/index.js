import React, { useContext } from 'react';
import { 
    Container, Logo,
    NameText, WelcomeText, 
} from './styles';

import { 
    DrawerContentScrollView, 
    DrawerItemList, DrawerItem,
} from '@react-navigation/drawer';

import { AuthContext } from '../../contexts/auth';


function CustomDrawer(props){

    const { user, signOut } = useContext(AuthContext);

    return(
        <DrawerContentScrollView {...props}>
            <Container>
                <Logo
                    source = {require('../../assets/Logo.png')}
                    resizeMode = 'contain'
                />
                <WelcomeText>
                    Bem-vindo
                </WelcomeText>
                <NameText>
                    {user?.nome}
                </NameText>
            </Container>

            <DrawerItemList {...props}/>

            <DrawerItem
                {...props}
                label = "Sair do App"
                inactiveBackgroundColor='#c62c36'
                inactiveTintColor='#fff'
                style={{marginTop: 20, flex:1, paddingLeft:22}}
                labelStyle={{textAlign:'center', fontWeight:'bold'}}
                onPress={()=>signOut()}
            />
        </DrawerContentScrollView>
    );
}

export default CustomDrawer;