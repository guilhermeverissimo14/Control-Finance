import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import { View, TextInput, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Image, Keyboard, SafeAreaView } from 'react-native';
import colors from '../../global/color';

const Step1 = ({ email, setEmail, next }) => {
    return(
        <SafeAreaView style={styles.element}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <>
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
                    </View>
                    <View style={styles.align}>
                        <View />
                        <TouchableOpacity onPress={next} style={styles.arrowRight1}>
                            <Image
                                source={require('../../assets/arrowRight.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </>
            </TouchableWithoutFeedback>
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
                    onChangeText={setEmail}
                    value={email}
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
    const [value, setValue] = useState(1);
    const [email, setEmail] = useState('');
    const [code, setCode] = useState();

    const previous = () => {
        setValue(value - 1);
    }

    const next = () => {
        setValue(value + 1);
    }

    return(
        <>
            <View style={styles.container}>
                {value === 1 && (
                    <Step1 email={email} setEmail={setEmail} next={next}/>
                )}
                {value === 2 && (
                    <Step2 code={code} setCode={setCode} previous={previous} next={next}/>
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
    step: {
        flex: 0.8,
        justifyContent: 'center',
    },
    text: {
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
    arrowRight1: {
        marginLeft: '100%',
    },

});