import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SingIn from '../screens/SingIn';
import Home from '../screens/Home/Home';
import Register from '../screens/Register';
const { Navigator, Screen } = createNativeStackNavigator();

const Tab = createNativeStackNavigator();

export default function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="signin" component={SingIn} />
            <Screen name="home" component={Home} />
            <Screen name="register" component={Register} />
        </Navigator>
        
    )
}