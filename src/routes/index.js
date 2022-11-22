import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AppRoutes from './appRoutes';
import Loading from '../components/Loading';
import SingIn from '../screens/SingIn';
import Register from '../screens/Register';
import { SignIn } from 'phosphor-react-native';

const { Navigator, Screen } = createNativeStackNavigator();

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
                <Navigator screenOptions={{ headerShown: false }}>
                    <Screen name="singin" component={SingIn} />
                    <Screen name="register" component={Register} />
                </Navigator>
                

            }
        </NavigationContainer>
    );
}