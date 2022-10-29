
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import colors from '../global/color';
import Input from '../components/Input';
import { useNavigation } from '@react-navigation/native';


export default function SingIn() {
    const navigation = useNavigation();

    function handleSigIn() {
        navigation.navigate("home");
    }
    function handleRegister() {
        navigation.navigate("register");
    }
    function handlePassword() {
        navigation.navigate("password");
    }

    console.log(email);
    return (
        <View style={styles.container}>
            <Image 
                source={require('../assets/UserCircle.png')}
                resizeMode="contain"
                style={{ width: '50%', height: '30%' }}
            />

            <View style={styles.form}>

                <Input placeholder="E-mail" keyboardType="email-address" icon="user" />
                <Input placeholder="Senha" keyboardType="password" security icon="pass" />

                <TouchableOpacity style={styles.forgot} onPress={handlePassword}>
                    <Text style={styles.textForgot}>
                        Esqueceu sua senha?
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={handleSigIn} >
                    <Text style={styles.textButton}>
                        Acessar
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.resgister} onPress={handleRegister}>
                    <Text style={styles.textForgot}>
                        Cadastre-se
                    </Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors('greenPrimary'),
        alignItems: 'center',
        justifyContent: 'center',
    },
    form: {
        width: "75%",
        justifyContent: 'center',

    },
    button: {

        backgroundColor: '#95FEEC',
        padding: 10,
        width: '100%',
        borderRadius: 30,
        marginVertical: 15
    },
    textButton: {
        fontSize: 20,
        color: '#142F30',
        textTransform: 'uppercase',
        textAlign: 'center'

    },
    forgot: {
        marginVertical: 5,


    },
    textForgot: {
        color: "white",
        fontSize: 18,
    },
    resgister: {
        alignItems: 'center',
        top: 15,
    }
});

