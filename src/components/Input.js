import React from 'react';
import { View, TextInput, Image, StyleSheet, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import { User, Eye, EyeSlash, Key } from 'phosphor-react-native';
import colors from '../global/color';
import { useState } from 'react';

export default function Input({ value, onChange, placeholder, security = false, keyboardType, autoCorrect = true, returnKeyType = "next", icon = null }) {
    const [hidePass, setHidePass] = useState(true);
    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <View style={styles.inputArea}>
                {icon === "user" && (
                    <Image
                        source={require('../assets/login.png')}
                        resizeMode="contain"
                    //style={{ width: '35%', height: '100%' }}
                    />
                )}
                {icon === "pass" && (
                    <Image
                        source={require('../assets/password.png')}
                        resizeMode="contain"
                    //style={{ width: '100%', height: '100%' }}
                    />
                )}

                <TextInput
                    placeholder={placeholder}
                    placeholderTextColor={colors("black")}
                    secureTextEntry={hidePass}
                    keyboardType={keyboardType}
                    autoCorrect={autoCorrect}
                    returnKeyType={returnKeyType}
                    style={styles.input}
                    onChangeText={onChange}
                    value={value}
                />
                {security && (
                    <TouchableOpacity style={styles.securityIcon} onPress={() => setHidePass(!hidePass)}>
                        {hidePass ? (
                            <Eye color={colors('black')} size={20} />
                        ) : (
                            <EyeSlash color={colors('black')} size={20} />
                        )}
                    </TouchableOpacity>
                )}
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    inputArea: {
        flexDirection: 'row',
        width: '100%',
        marginBottom: 20,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: colors("primary"),
        color: colors("black"),
        backgroundColor: colors("white"),
        borderRadius: 10,
    },
    input: {
        width: '65%',
        fontSize: 16,
        paddingHorizontal: 10,

    },
    securityIcon: {
        width: '20%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    }

});