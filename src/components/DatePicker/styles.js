import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const CalendarContainer = styled.TouchableOpacity`
    background-color: ${Platform.OS === 'ios'?'#151515':'transparent'};
    position: absolute;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
`;
export const DismissButton = styled.TouchableOpacity`

`;

export const DismissContainer = styled.View`
    width: 100%;
    padding: 16px;
    justify-content: flex-end;
    align-items: flex-end;
    background-color: #fff;
    border-bottom-width: 1px;
    border-color: #333;
`;

export const DismissText = styled.Text`
    color: #151515;
`;
