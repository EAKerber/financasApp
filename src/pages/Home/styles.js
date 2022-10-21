import styled from 'styled-components/native';

export const Background = styled.View`
    flex: 1;
    background-color: #151515;
`;

export const Container = styled.View`
    margin-left: 15px;
    margin-bottom: 25px;
`;

export const FilterArea = styled.View`
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`;
export const FilterButton = styled.TouchableOpacity`
    margin-right: 15px;
    margin-bottom: 5px;
`;

export const List = styled.FlatList.attrs({
    marginHorizontal: 15,
    contentContainerStyle:{ paddingBottom: 15 },
})`
    background-color: #fff;
    margin-left: 10px;
    margin-right: 10px;
    padding-top: 10px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
`;

export const LoadingIndicator = styled.ActivityIndicator.attrs({
    size: 'large',
    color: '#00b94a',
})`
`;

export const Nome = styled.Text`
    font-size: 20px;
    font-style: italic;
    color: #fff;
`;

export const NotFoundText = styled.Text`
    color: rgba(15,15,15,0.5);
    font-weight: bold;
    font-style: italic;
    font-size: 16px;
    margin-top: 15px;
`;

export const Saldo = styled.Text`
    margin-top: 5px;
    font-size: 30px;
    font-weight: bold;
    color: #fff;
`;

export const Title = styled.Text`
    margin-left: 15px;
    color: #00b94a;
    font-size: 15px;
    margin-bottom: 10px;
`;


export const ViewReplaceList = styled.View`
    background-color: #fff;
    flex:1;
    margin-left: 10px;
    margin-right: 10px;
    padding-top: 10px;
    justify-content: ${props => props?.notFound?'flex-start':'center'};
    align-items: center;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
`;

