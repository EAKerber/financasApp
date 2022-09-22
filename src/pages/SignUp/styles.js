import styled from 'styled-components/native';

export const AreaInput = styled.View`
    flex-direction: row;
`;

export const Background = styled.View`
    flex: 1;
    background-color: #151515;
`;

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#rgba(255,255,255,0.20)',
})`
    background-color: rgba(15,15,15,0.70);
    margin-bottom: 15px;
    border-radius: 7px;
    font-size: 17px;
    padding: 10px;
    color: #fff;
    width: 90%;
`;

export const SubmitButton = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    background-color: #00b94a;
    width: 90%;
    height: 45px;
    border-radius: 7px;
    margin-top: 10px;
`;

export const SubmitText = styled.Text`
    font-size: 20px;
    color: #151515;
`;