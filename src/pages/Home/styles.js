import styled from 'styled-components/native';

export const Background = styled.View`
    flex: 1;
    background-color: #151515;
`;

export const Container = styled.View`
    margin-left: 15px;
    margin-bottom: 25px;
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

export const Nome = styled.Text`
    font-size: 20px;
    font-style: italic;
    color: #fff;
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
    margin-bottom: 10px;
`;

