import React, { useContext } from 'react';
import { LoadingBackground, LoadingIndicator } from '../styles/routes_style';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import { AuthContext } from '../contexts/auth';

function Routes() {
    const {signed, loading} = useContext(AuthContext);

    if(loading){
        return(
            <LoadingBackground>
                <LoadingIndicator/>
            </LoadingBackground>
        )
    }

    return (
        signed
        ?
        <AppRoutes/>
        :
        <AuthRoutes/>       
    );
}

export default Routes;