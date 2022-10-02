import React from 'react';
import { Container, MenuButton } from './styles';

import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

function Header(){

    const navigator = useNavigation();

    return(
        <Container>
            <MenuButton onPress={()=> navigator.toggleDrawer() }>
                <Icon name='menu' color='#fff' size={30} />
            </MenuButton>
        </Container>
    );
}

export default Header;