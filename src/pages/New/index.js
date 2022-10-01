import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';

import { AuthContext } from '../../contexts/auth';

function New() {

    const { user, signOut } = useContext(AuthContext);

    return (
        <View>
            <Text>New</Text>
        </View>
    );
}

export default New;