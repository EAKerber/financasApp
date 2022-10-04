import React from 'react';

import Icon from 'react-native-vector-icons/Feather';

import { 
    Container, IconView,
    TipoView, TipoText,
    ValorText,
} from './styles';

function HistoricoItem({data}){
    return(
        <Container>
            <TipoView>
                <IconView 
                    tipo = {data?.tipo}
                >
                    <Icon 
                        name= {data?.tipo==='receita'?'arrow-up':'arrow-down'} 
                        color='#fff' 
                        size={20} 
                    />
                    <TipoText>{data?.tipo}</TipoText>
                </IconView>
            </TipoView>

            <ValorText>{'R$ '+data?.valor}</ValorText>
        </Container>
    );
}

export default HistoricoItem;
