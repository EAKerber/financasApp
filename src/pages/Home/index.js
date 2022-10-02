import React, { useContext } from 'react';

import { 
    Background, Container, 
    Nome, Saldo, Title,
} from './styles';

import { AuthContext } from '../../contexts/auth';
import Header from '../../components/Header/index';

function Home() {

    const { user } = useContext(AuthContext);

    return (
        <Background>
            <Header/>
            <Container>
                <Nome>{user.nome}</Nome>
                <Saldo>123123</Saldo>
            </Container>
            <Title>Ultimas Movimentações</Title>
        </Background>
    );
}

export default Home;