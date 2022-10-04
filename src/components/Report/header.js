import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native';

import colors from '../../global/color';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 3 : 40; //observação: depois tem que testar em iphone que pode ser que o reader fique muito grande com 40.

export default function Report() {
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.text}>Relatório Mensal </Text>
            </View>
            <View style={styles.itens}>
                <TouchableOpacity style={styles.iconLeft}>
                    <Image
                        source={require('../../assets/arrowLeft.png')}
                    />

                </TouchableOpacity>

                <View style={styles.date}>
                    <Text style={styles.mes} > Setembro</Text>
                </View>

                <TouchableOpacity style={styles.iconRight}>
                    <Image
                        source={require('../../assets/arrowRight.png')}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors('greenSecondary'),
        paddingTop: statusBarHeight,
        paddingEnd: 16,
        paddingStart: 16,
        paddingBottom: 15,

    },
    itens: {
        flexDirection: 'row',
        paddingTop: 16,
        justifyContent:'space-around',
    },
    title: {
        alignItems: 'center',
        
    },
    text: {
        color: 'white',
        fontSize: 26,
    },
    date: {
        width:'40%',
        backgroundColor:colors('greenButton'),
        alignItems: 'center',
        padding: 10,
        borderRadius: 30,
        
    },
    mes:{
        fontSize: 18,
    },
    iconLeft: {
        paddingTop: 7,
    },
    iconRight: {
        paddingTop: 7,
    },

});