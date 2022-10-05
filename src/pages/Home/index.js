import React, { useContext, useState } from 'react';

import { 
    Background, Container,
    List, Nome, Saldo, 
    Title,
} from './styles';

import { AuthContext } from '../../contexts/auth';
import Header from '../../components/Header/index';
import HistoricoItem from '../../components/HistoricoItem/index';

function Home() {

    const { user } = useContext(AuthContext);

    const [historico, setHistorico] = useState([
        {key:'1', tipo: 'receita', valor: 110},
        {key:'2', tipo: 'receita', valor: 180},
        {key:'3', tipo: 'despesa', valor: 160},
        {key:'4', tipo: 'receita', valor: 120},
        {key:'5', tipo: 'despesa', valor: 150},
        {key:'6', tipo: 'receita', valor: 210},
        {key:'7', tipo: 'receita', valor: 190},
    ]);

    return (
        <Background>
            <Header/>
            <Container>
                <Nome>{user&&user.nome}</Nome>
                <Saldo>123123</Saldo>
            </Container>
            <Title>Ultimas Movimentações</Title>
            
            <List
                showsVerticalScrollIndicator={false}
                data={historico}
                keyExtractor={ item => item.key }
                renderItem={({item})=>(
                    <HistoricoItem 
                        data={item}
                    />
                )}
            />
        </Background>
    );
}

export default Home;