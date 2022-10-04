import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SingIn from '../screens/SingIn';
import Home from '../screens/Home/Home';
import Register from '../screens/Register';
import Report from '../screens/Report/Report';
import Add from '../components/Add/add';
const { Navigator, Screen } = createNativeStackNavigator();



export default function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="signin" component={SingIn} />
            <Screen name="home" component={Home} />
            <Screen name="register" component={Register} />
            <Screen name="report" component={Report} />
            <Screen name="add" component={Add} />
        </Navigator>
        
    )
}