import React, { useEffect, useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Image, Keyboard, SafeAreaView } from 'react-native';
import colors from '../global/color';

const Step1 = ({ name, setName, next, value }) => {
    return (
        <SafeAreaView style={styles.element}>

            <View style={styles.barContainer}>
                <View style={{ backgroundColor: colors('greenLoading'), borderRadius: 6, width: value.toString() + '%' }} />
            </View>

            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={styles.step}>
                    <Text style={styles.text}>1 - Informe seu nome:*</Text>
                    <TextInput
                        placeholder={'Responda aqui...'}
                        placeholderTextColor={colors("white")}
                        keyboardType={'default'}
                        returnKeyType={"next"}
                        onChangeText={setName}
                        value={name}
                        style={styles.input}
                    />
                    <View style={styles.align}>
                        <View />
                        <TouchableOpacity onPress={next} style={styles.arrowRight1}>
                            <Image
                                source={require('../assets/arrowRight.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    )
}

const Step2 = ({ email, setEmail, previous, next, value }) => {
    return (
        <SafeAreaView style={styles.element}>
            <View style={styles.barContainer}>
                <View style={{ backgroundColor: colors('greenLoading'), borderRadius: 6, width: value.toString() + '%' }} />
            </View>
            <View style={styles.step}>
                <Text style={styles.text}>2 - Informe seu e-mail:*</Text>
                <TextInput
                    placeholder={'Responda aqui...'}
                    placeholderTextColor={colors("white")}
                    keyboardType={'email-address'}
                    returnKeyType={"next"}
                    onChangeText={setEmail}
                    value={email}
                    style={styles.input}
                />
                <View style={styles.align}>
                    <TouchableOpacity onPress={previous} style={styles.arrowLeft}>
                        <Image
                            source={require('../assets/arrowLeft.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={next} style={styles.arrowRight}>
                        <Image
                            source={require('../assets/arrowRight.png')}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const Step3 = ({ password, setPassword, previous, next, value }) => {
    return (
        <SafeAreaView style={styles.element}>
            <View style={styles.barContainer}>
                <View style={{ backgroundColor: colors('greenLoading'), borderRadius: 6, width: value.toString() + '%' }} />
            </View>
            <View style={styles.step}>
                <Text style={styles.text}>3 - Informe uma senha:*</Text>
                <TextInput
                    placeholder={'Responda aqui...'}
                    placeholderTextColor={colors("white")}
                    keyboardType={'default'}
                    returnKeyType={"next"}
                    secureTextEntry={true}
                    onChangeText={setPassword}
                    value={password}
                    style={styles.input}
                />
                <View style={styles.align}>
                    <TouchableOpacity onPress={previous} style={styles.arrowLeft}>
                        <Image
                            source={require('../assets/arrowLeft.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={next} style={styles.arrowRight}>
                        <Image
                            source={require('../assets/arrowRight.png')}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const Step4 = ({ password, confirmPassword, setConfirmPassword, previous, next, value }) => {
    return (
        <SafeAreaView style={styles.element}>
            <View style={styles.barContainer}>
                <View style={{ backgroundColor: colors('greenLoading'), borderRadius: 6, width: value.toString() + '%' }} />
            </View>
            <View style={styles.step}>
                <Text style={styles.text}>4 - Confirme sua senha:*</Text>
                <TextInput
                    placeholder={'Responda aqui...'}
                    placeholderTextColor={colors("white")}
                    keyboardType={'default'}
                    secureTextEntry={true}
                    returnKeyType={"next"}
                    onChangeText={setConfirmPassword}
                    value={confirmPassword}
                    style={styles.input}
                />
                <View style={styles.align}>
                    <TouchableOpacity onPress={previous} style={styles.arrowLeft}>
                        <Image
                            source={require('../assets/arrowLeft.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={next} style={styles.arrowRight}>
                        <Image
                            source={require('../assets/arrowRight.png')}
                        />
                    </TouchableOpacity>
                </View>
                {confirmPassword.length > 3 && password !== confirmPassword &&
                    <Text style={styles.error}>As senhas não coincidem!</Text>}
            </View>
        </SafeAreaView>
    )
}

export default function Cadastre() {
    const [value, setValue] = useState(25);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const previous = () => {
        if (value > 0)
            setValue(Number(value) - 25);
    }

    const next = () => {
        if (value < 100)
            setValue(Number(value) + 25);
    }

    useEffect(() => {
        console.log('name', name)
    }, [name])


    return (
        <>
            <View style={styles.container}>
                {value === 25 && (
                    <Step1 name={name} setName={setName} previous={previous} next={next} value={value} />
                )}
                {value === 50 && (
                    <Step2 email={email} setEmail={setEmail} previous={previous} next={next} value={value} />
                )}
                {value === 75 && (
                    <Step3 password={password} setPassword={setPassword} previous={previous} next={next} value={value} />
                )}
                {value === 100 && (
                    <Step4 password={password} confirmPassword={confirmPassword} setConfirmPassword={setConfirmPassword} previous={previous} next={next} value={value} />
                )}
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
    barContainer: {
        marginTop: '8%',
        marginLeft: '2%',
        backgroundColor: colors('white'),
        width: '95%',
        height: '2%',
        borderRadius: 6,
        borderColor: colors('black'),
        flexDirection: "row",
    },
    step: {
        flex: 0.8,
        justifyContent: 'center',
    },
    text: {
        marginHorizontal: 30,
        color: colors('white'),
        fontSize: 18,
    },
    error: {
        textAlign: 'center',
        color: colors('red'),
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
    arrowRight1: {
        marginTop: 15,
        marginLeft: '100%',
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
});