import React, { useContext, useState, useEffect } from 'react';

import { Alert } from 'react-native';

import { 
    Background, Container,
    List, Nome, Saldo, 
    Title,
} from './styles';

import firebase from '../../services/firebaseConnection';
import { format, isBefore } from 'date-fns';

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
            let date = format(new Date(), 'dd/MM/yyyy');
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
                        date: item.val().date,
                    };
                    console.log(list);
                    setHistorico(oldHistorico => [list, ...oldHistorico]);
                });
            });
        }

        loadHist();
    },[]);


    //Aciona confirmação para deletar

    function handleDelete(data){

        //Formatando data do item

        let [iD, iM, iY] = data?.date.split('/');
        let enItemDate = new Date(`${iY}-${iM}-${iD}`);

        //Formatando data de hoje

        let newDateFormat = format(new Date(), 'dd/MM/yyyy');
        let [nD, nM, nY] = newDateFormat.split('/');
        let newDate = new Date(`${nY}-${nM}-${nD}`);

        //console.log(enItemDate, newDate);

        if(isBefore(enItemDate, newDate)){
            alert('Você não pode deletar um registro antigo');
            return;
        }

        Alert.alert(
            'Cuidado, Atenção!',
            ` Você deseja excluir:\n\n ${data?.type[0].toUpperCase() + data?.type.slice(1)} - Valor R$${data?.value.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}?`,
            [
                {
                    text: 'Cancelar',
                    style: 'cancel',
                },
                {
                    text: 'Continuar',
                    onPress: ()=> handleItemDelete(data),
                },
            ],
        );

    }

    //deleta o item no banco de dados

    async function handleItemDelete(data){
        await firebase.database().ref('history').child(uid)
        .child(data?.key).remove()
        .then(async()=>{
            let newSaldo = saldo;

            data?.type ==='receita'?
            newSaldo -= parseFloat(data?.value):
            newSaldo += parseFloat(data?.value);

            await firebase.database().ref('users').child(uid)
            .child('saldo').set(newSaldo)
            .catch((error)=>{
                console.log(error);
            });
        })
        .catch((error)=>{
            console.log(error);
        });
    }

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
                        deleteItem={handleDelete}
                    />
                )}
            />
        </Background>
    );
}

export default Home;