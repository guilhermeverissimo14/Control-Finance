import React, { useState } from 'react';
import { View, TextInput, Image, StyleSheet, KeyboardAvoidingView, Platform, TouchableOpacity, } from 'react-native';

import colors from '../../global/color';

export default function Input({value, onChange, placeholder, security = false, keyboardType, autoCorrect = true, returnKeyType= "next"}) {
  return(
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <View>
            <TextInput 
                placeholder={placeholder}
                placeholderTextColor={colors("white")}
                keyboardType={keyboardType}
                onChageText={onChange}
                value={value}
            />
        </View>
    </KeyboardAvoidingView>
  );  
}