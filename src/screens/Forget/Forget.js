import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import { View, TextInput, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Image, Keyboard, SafeAreaView } from 'react-native';
import colors from '../../global/color';

const Step1 = ({ email, setEmail, previous, next }) => {
    return(
        <SafeAreaView style={styles.element}>
            <View style={styles.step}>
                <Text style={styles.text}>Informe seu e-mail:</Text>
                <TextInput
                    placeholder={'Responda aqui...'}
                    placeholderTextColor={colors("white")}
                    keyboardType={'default'}
                    returnKeyType={"next"}
                    onChangeText={setEmail}
                    value={email}
                    style={styles.input}
                />
                <View style={styles.align}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.arrowLeft}>
                        <Image
                            source={require('../../assets/arrowLeft.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={next} style={styles.arrowRight}>
                        <Image
                            source={require('../../assets/arrowRight.png')}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const Step2 = ({ code, setCode, previous, next}) => {
    return (
        <SafeAreaView style={styles.element}>
            <View style={styles.step}>
                <Text style={styles.text}>Informe o código enviado por e-mail:</Text>
                <TextInput
                    placeholder={'Responda aqui...'}
                    placeholderTextColor={colors("white")}
                    keyboardType={'email-address'}
                    returnKeyType={"next"}
                    onChangeText={setCode}
                    value={code}
                    style={styles.input}
                />
                <View style={styles.align}>
                    <TouchableOpacity onPress={previous} style={styles.arrowLeft}>
                        <Image
                            source={require('../../assets/arrowLeft.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={next} style={styles.arrowRight}>
                        <Image
                            source={require('../../assets/arrowRight.png')}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const Step3 = ({ password, setPassword, confirmPassword, setConfirmPassword, previous, next}) => {
    return (
        <SafeAreaView style={styles.element}>
            <View style={styles.step}>
                <Text style={styles.text}>Informe sua nova senha:</Text>
                <TextInput
                    placeholder={'Responda aqui...'}
                    placeholderTextColor={colors("white")}
                    keyboardType={'email-address'}
                    returnKeyType={"next"}
                    onChangeText={setPassword}
                    value={password}
                    style={styles.input}
                />
                <Text style={styles.text}>Confirme sua nova senha:</Text>
                <TextInput
                    placeholder={'Responda aqui...'}
                    placeholderTextColor={colors("white")}
                    keyboardType={'email-address'}
                    returnKeyType={"next"}
                    onChangeText={setConfirmPassword}
                    value={confirmPassword}
                    style={styles.input}
                />
                <View style={styles.align}>
                    <TouchableOpacity onPress={previous} style={styles.arrowLeft}>
                        <Image
                            source={require('../../assets/arrowLeft.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={next} style={styles.arrowRight}>
                        <Image
                            source={require('../../assets/arrowRight.png')}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default function Forget() {
    const navigation = useNavigation();

    const [value, setValue] = useState(1);
    const [email, setEmail] = useState('');
    const [code, setCode] = useState();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const previous = () => {
        setValue(value - 1);
    }

    const next = () => {
        setValue(value + 1);
    }

    return(
        <>
            <View style={styles.container}>
                <>
                    <View style={styles.exit}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image  
                                source={require('../../assets/exitForget.png')}
                            />
                        </TouchableOpacity>
                    </View>
                    
                    {value === 1 && (
                        <Step1 email={email} setEmail={setEmail} previous={previous} next={next}/>
                    )}
                    {value === 2 && (
                        <Step2 code={code} setCode={setCode} previous={previous} next={next}/>
                    )}
                    {value === 3 && (
                        <Step3 password={password} confirmPassword={confirmPassword} setPassword={setPassword} setConfirmPassword={setConfirmPassword} previous={previous} next={next} />
                    )}
                </>
                
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors('greenPrimary'),
    },
    element: {
        flex: 1,
    },
    step: {
        flex: 0.8,
        justifyContent: 'center',
    },
    text: {
        marginTop: 15,
        marginHorizontal: 30,
        color: colors('white'),
        fontSize: 18,
    },
    input: {
        marginTop: 15,
        marginHorizontal: 30,
        borderBottomWidth: 1,
        width: '80%',
        borderBottomColor: colors('white'),
        color: colors('white'),
    },
    align: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    arrowLeft: {
        marginTop: 15,
        marginHorizontal: 30,
    },
    arrowRight: {
        marginTop: 15,
        marginLeft: '71%',
        marginHorizontal: 30,
    },
    exit: {
        display: 'flex',
       alignItems: 'flex-end',
       marginTop: 18,
       marginRight: 10
    }
});