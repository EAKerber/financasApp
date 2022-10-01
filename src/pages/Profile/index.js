import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';

import { 
    Container, Logout, 
    LogoutText, NewLink, 
    NewText, Nome,
} from './styles';

import { AuthContext } from '../../contexts/auth';

function Profile() {

    const { user, signOut } = useContext(AuthContext);
    const navigator = useNavigation();

    return (
        <Container>
            <Nome>{user&&user.nome}</Nome>
            <NewLink
                onPress={()=>{navigator.navigate('Resgistrar')}}
            >
                <NewText>Registrar Gastos</NewText>
            </NewLink>
            <Logout
                onPress={signOut&&signOut}
            >
                <LogoutText>Sair</LogoutText>
            </Logout>
        </Container>
    );
}

export default Profile;