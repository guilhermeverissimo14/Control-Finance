import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cadastre from '../screens/Cadastre';
import SingIn from '../screens/SingIn';

const { Navigator, Screen } = createNativeStackNavigator();

export default function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="singin" component={SingIn} />
        </Navigator>
    )
}