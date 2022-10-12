import React, { useContext, useState, useEffect } from 'react';

import { 
    Background, Container,
    List, Nome, Saldo, 
    Title,
} from './styles';

import firebase from '../../services/firebaseConnection';
import { format } from 'date-fns';

import { AuthContext } from '../../contexts/auth';
import Header from '../../components/Header/index';
import HistoricoItem from '../../components/HistoricoItem/index';

function Home() {

    const { user } = useContext(AuthContext);

    const [historico, setHistorico] = useState([]);
    const [saldo, setSaldo] = useState(null);

    const uid = user&&user.uid;

    useEffect(()=>{

        //carregar histórico e saldo do usuário

        async function loadHist(){
            setHistorico([]);
            let date = format(new Date(), 'dd/MM/yy');
            //saldo
            await firebase.database().ref('users').child(uid).on('value', (snapshot)=>{
                setSaldo(snapshot.val().saldo);
            });
            //histórico
            await firebase.database().ref('history').child(uid)
            .orderByChild('date').equalTo(date)
            .limitToLast(10).on('value', (snapshot)=>{
                setHistorico([]);
                snapshot.forEach((item)=>{
                    let list = {
                        key: item.key,
                        type: item.val().type,
                        value: item.val().value,
                    };
                    console.log(list);
                    setHistorico(oldHistorico => [list, ...oldHistorico]);
                });
            });
        }

        loadHist();
    },[]);

    return (
        <Background>
            <Header/>
            <Container>
                <Nome>{user&&user.nome}</Nome>
                <Saldo>R$ {saldo&&saldo.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</Saldo>
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