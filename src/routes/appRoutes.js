import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home/Home';
import Register from '../screens/Register';
import Report from '../screens/Report/Report';
import Add from '../screens/Add/addi';
import Forget from '../screens/Forget/Forget';

const { Navigator, Screen } = createNativeStackNavigator();

export default function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="home" component={Home} />
            <Screen name="report" component={Report} />
            <Screen name="add" component={Add} />
            <Screen name="forget" component={Forget} />
        </Navigator>
    )
}