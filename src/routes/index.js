import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

import AppRoutes from './appRoutes';
import Loading from '../components/Loading';
import SingIn from '../screens/SingIn';

export default function Routes() {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const subscriber = auth()
            .onAuthStateChanged(response => {
                setUser(response);
                setLoading(false);
            });

        return subscriber;
    }, []);

    if (loading) {
        return (
            <Loading />
        );
    }

    return (
        <NavigationContainer>
            {user !== null ?
                <AppRoutes />
                :
                <SingIn />
            }
        </NavigationContainer>
    );
}