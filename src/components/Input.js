import React from 'react';
import { TextInput, StyleSheet, KeyboardAvoidingView, Platform, } from 'react-native';
import colors from '../global/color';

export default function Input({ placeholder, security = false, keyboardType, autoCorrect = true, returnKeyType = "next" }) {
    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
    
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={colors("black")}
                secureTextEntry={security}
                keyboardType={keyboardType}
                autoCorrect={autoCorrect}
                returnKeyType={returnKeyType}
                style={styles.input}
            />
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    input: {
        width: "100%",
        borderBottomWidth: 1,
        borderColor: colors("primary"),
        color: colors("white"),
        fontSize: 16,
        padding: 10,
        marginBottom: 20,
        backgroundColor: colors("white"),
        borderRadius: 8,
    },
    
});