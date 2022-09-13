import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cadastre from '../screens/Cadastre';

const { Navigator, Screen } = createNativeStackNavigator();

export default function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="cadastre" component={Cadastre} />
        </Navigator>
    )
}