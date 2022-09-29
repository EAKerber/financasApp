import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';

import { AuthContext } from '../../contexts/auth';

function Home() {

    const { user, signOut } = useContext(AuthContext);

    return (
        <View>
            <Text>Home</Text>
            <Text>{user?.nome}</Text>
            <Text>{user?.uid}</Text>
            <Text>{user?.email}</Text>
            <Button
                title='deslogar'
                onPress={signOut}
            />
        </View>
    );
}

export default Home;