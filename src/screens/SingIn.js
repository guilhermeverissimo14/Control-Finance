import React, { useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import { StyleSheet, Text, View, Image, TouchableOpacity, BackHandler, Alert } from 'react-native';
import colors from '../global/color';
import Input from '../components/Input';
import { useNavigation } from '@react-navigation/native';

export default function SingIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    function handleSigIn() {
        if (!email && !password) {
            return Alert.alert('Erro', 'Preencha todos os campos.');
        }

        if (email && !password) {
            return Alert.alert('Erro', 'Informe a senha.');
        }

        if (!email && password) {
            return Alert.alert('Erro', 'Informe o e-mail.');
        }

        auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                console.log('User account signed in!');
                console.log(auth().currentUser);
            })
            .catch(error => {
                console.log(error);
                console.log('code: ', error.code);

                if (error.code === 'auth/invalid-email') {
                    return Alert.alert('Erro', 'E-mail inválido.');
                }

                if (error.code === 'auth/wrong-password') {
                    return Alert.alert('Erro', 'E-mail ou senha inválida.');
                }

                if (error.code === 'auth/user-not-found') {
                    return Alert.alert('Erro', 'E-mail ou senha inválida.');
                }

                return Alert.alert('Erro', 'Ocorreu um erro ao fazer login.');
            });
        //navigation.navigate("home"); // Não precisa mais.. agora a autenticação é feita no firebase e não mais no app.
    }

    function handleRegister() {
        navigation.navigate("register");
    }

    function handleForget() {
        navigation.navigate("forget");
    }

    //função para não voltar no botão do celular
    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', () => {
            return true;
        })
    }, []);

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/UserCircle.png')}
                resizeMode="contain"
                style={{ width: '70%', height: '30%' }}
            />

            <View style={styles.form}>

                <Input placeholder="E-mail" keyboardType="email-address" value={email} onChange={setEmail} icon="user" />
                <Input placeholder="Senha" keyboardType="password" security icon="pass" value={password} onChange={setPassword} />

                <TouchableOpacity style={styles.forgot} onPress={handleForget}>
                    <Text style={styles.textForgot}>
                        Esqueceu sua senha?
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={handleSigIn}>
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
        </View>
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
        marginVertical: 15,
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