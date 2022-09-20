
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import colors from '../global/color';
import Input from '../components/Input';
import { useNavigation } from '@react-navigation/native';
export default function SingIn() {
    const navigation = useNavigation();
    function handleSigIn() {
        navigation.navigate("Home")
    }
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/UserCircle.png')}
                resizeMode="contain"
                style={{ width: '50%', height: '30%' }}
            />
            <View style={styles.form}>
                <Input placeholder="E-mail" keyboardType="email-address" />
                <Input placeholder="Senha" keyboardType="password" />
                <TouchableOpacity style={styles.button} onPress={handleSigIn} >
                    <Text style={styles.textButton}>
                       Acessar
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
        flex: 0.5,
        width: "75%",
        justifyContent: 'center',
    },
    button: {
        
        backgroundColor: '#95FEEC',
        padding: 10,
        width: '100%',
        borderRadius: 30,
        top: 15
    },
    textButton: {
        fontSize: 20,
        color: '#142F30',
        textTransform: 'uppercase',
        textAlign: 'center'
    }

});

