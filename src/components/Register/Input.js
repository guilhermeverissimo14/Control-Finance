import React from 'react';
import { View, TextInput, KeyboardAvoidingView, Platform } from 'react-native';

import colors from '../../global/color';

export default function Input({ value, onChange, placeholder, keyboardType, autoCorrect = true, returnKeyType = "next", style }) {
  return (
    // <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
    <View>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={colors("white")}
        keyboardType={keyboardType}
        autoCorrect={autoCorrect}
        returnKeyType={returnKeyType}
        onChageText={onChange}
        value={value}
        style={style}
      />
    </View>
    // </KeyboardAvoidingView>
  );
}