import styled from 'styled-components/native';

export const LoadingBackground = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #151515;
`;

export const LoadingIndicator = styled.ActivityIndicator.attrs({
    size: 'large',
    color: '#00b94a',
})`
`;
