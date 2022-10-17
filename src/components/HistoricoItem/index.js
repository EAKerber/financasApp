import React from 'react';

import Icon from 'react-native-vector-icons/Feather';

import {
    Container, DeleteContainer,
    IconView, TipoView, TipoText,
    ValorText,
} from './styles';

function HistoricoItem({ data, deleteItem }) {
    return (
        <DeleteContainer onLongPress={()=>deleteItem(data)}>
            <Container>
                <TipoView>
                    <IconView
                        tipo={data?.type}
                    >
                        <Icon
                            name={data?.type === 'receita' ? 'arrow-up' : 'arrow-down'}
                            color='#fff'
                            size={20}
                        />
                        <TipoText>{data?.type}</TipoText>
                    </IconView>
                </TipoView>

                <ValorText>
                    R$ {data?.value.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                </ValorText>
            </Container>
        </DeleteContainer>
    );
}

export default HistoricoItem;
