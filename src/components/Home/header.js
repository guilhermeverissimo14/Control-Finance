import React, { useState } from "react";
import auth from '@react-native-firebase/auth';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { UserCircle, SignOut } from 'phosphor-react-native'

import colors from "../../global/color";

//função que faz a verificação porque o "currentHeight" e so para android.
const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header() {
    const [user] = useState(auth().currentUser);

    //console.log('user', user);

    function handleLogout() {
        auth()
            .signOut()
            .catch((error) => {
                console.log('Error signing out: ', error);
                return Alert.alert('Erro', 'Não foi possível sair.');
            });
    }

    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.contentLeft}>
                <UserCircle size={48} color="#FFF" />

                <Text style={styles.user}>Olá, {user.email}!</Text>
            </View>


            <TouchableOpacity onPress={handleLogout}>
                <SignOut size={32} color="#FFF" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '15%',
        backgroundColor: colors('greenPrimary'),
        paddingTop: statusBarHeight,
        paddingHorizontal: 10,
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    contentLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    user: {
        fontSize: 24,
        color: 'white',
        marginLeft: 10,
        fontWeight: 'bold',
    },
})