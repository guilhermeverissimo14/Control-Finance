import React, { useState } from 'react';
import { View, TextInput, Image, StyleSheet, KeyboardAvoidingView, Platform, TouchableOpacity, } from 'react-native';

import colors from '../global/color';

export default function Input({ value, onChange, placeholder, security = false, keyboardType, autoCorrect = true, returnKeyType = "next", icon = null }) {
    
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
                    secureTextEntry={security}
                    keyboardType={keyboardType}
                    autoCorrect={autoCorrect}
                    returnKeyType={returnKeyType}
                    style={styles.input}
                    onChangeText={onChange}
                    value={value}
                />
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({

    input: {
        width: '80%',
        fontSize: 16,
        paddingHorizontal: 10,

    },
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

});