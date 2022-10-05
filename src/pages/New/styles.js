import styled from 'styled-components/native';

export const Background = styled.View`
    flex: 1;
    background-color: #151515;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#444',
})`
    height: 50px;
    width: 90%;
    background-color: rgba(255,255,255,0.9);
    margin-top: 30px;
    font-size: 17px;
    padding-left: 10px;
    padding-right: 10px;
`;

export const KeyboardDismiss = styled.TouchableWithoutFeedback`
    flex: 1;
`;

export const SubmitButton = styled.TouchableOpacity`
    width: 90%;
    height: 50px;
    margin-top: 25px;
    align-items: center;
    justify-content: center;
    background-color: #00b94a;
`;

export const SubmitText = styled.Text`
    font-size: 19px;
    font-weight: bold;
    color: #fff;
`;