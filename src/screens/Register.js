import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import colors from '../global/color'

export default function Cadastre() {
 return (
    <View>
        <Text>Cadastro de Usário</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors('greenPrimary'),
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 12,
    }
});