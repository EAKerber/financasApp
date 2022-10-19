import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: rgba(0,0,0,0.08);
    margin-bottom: 5px;
    margin-right: 5px;
    margin-left: 5px;
    padding: 10px;
    box-shadow: 2px 2px rgba(0,0,0,0.40);
    border-radius: 10px;
`;

export const DateText = styled.Text`
    color: #151515;
    margin-left: 5px;
    font-size: 15px;
    font-style: italic;
    font-weight: 450;
`;
export const DeleteContainer = styled.TouchableOpacity`
`;

export const IconView = styled.View`
    flex-direction: row;
    padding-top: 3px;
    padding-bottom: 3px;
    padding-left: 3px;
    padding-right: 8px;
    background-color: ${props => props?.tipo==='receita'?'#00b94a':'#c62c36'};
    border-radius: 8px;
    align-items: center;
    margin-bottom: 2px;
`;

export const TipoView = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const TipoText = styled.Text`
    color: #fff;
    margin-left: 5px;
    font-size: 16px;
    font-style: italic;
`;

export const ValorText = styled.Text`
    color: #151515;
    margin-left: 1px;
    font-size: 22px;
    font-weight: bold;
`;


