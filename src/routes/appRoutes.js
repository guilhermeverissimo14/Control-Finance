import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from '../screens/Register';
import SingIn from '../screens/SingIn';

const { Navigator, Screen } = createNativeStackNavigator();

export default function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="register" component={Register} />
        </Navigator>
    )
}