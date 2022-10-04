import React from 'react';
import { View, StyleSheet, Text, Input, TouchableOpacity } from 'react-native';

import colors from '../../global/color';
import Navigation from '../../components/Home/navigation';
import Header from '../../components/Add/header';

export default function Addi() {
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.menu}>
                <View>
                    <Text> Descrição</Text>

                </View>

                <View>
                    <Text> Data</Text>
                </View>

                <View>
                    <Text> Valor</Text>
                </View>

                <View style={styles.button}>
                    <TouchableOpacity style={styles.button1}>
                        <Text style={styles.TextButton}>
                            Adicionar
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Navigation />
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors('FundoReport'),
        flex: 1,
    },
    button: { 
        alignItems: 'center',   
    },
    button1: {
        backgroundColor: colors('greenLoading'),
        alignItems: 'center',
        width: '80%',
        height: '10%',
        borderRadius:30,
        marginTop: 450,
    },
    
    TextButton: {
        fontSize: 35,
    },
});