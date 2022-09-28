import React, { useContext } from 'react';
import { View, Text } from 'react-native';

import { AuthContext } from '../../contexts/auth';

function Home() {

    const { user } = useContext(AuthContext);

    return (
        <View>
            <Text>Home</Text>
            <Text>{user?.nome}</Text>
            <Text>{user?.uid}</Text>
            <Text>{user?.email}</Text>
        </View>
    );
}

export default Home;