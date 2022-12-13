import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native';
import { months, years } from '../../utils/functions';

import colors from '../../global/color';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 3 : 40; //observação: depois tem que testar em iphone que pode ser que o reader fique muito grande com 40.

export default function Report(props) {
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.text}>Relatório Mensal </Text>
            </View>
            <View style={styles.itens}>
                <TouchableOpacity style={styles.iconLeft} onPress={props.backMonth} >
                    <Image
                        source={require('../../assets/arrowLeft.png')}
                    />
                </TouchableOpacity>

                <View style={styles.date}>
                    <Text style={styles.mes}>{months(props.currentMonth)} / {years(props.currentYear)}</Text>
                </View>

                <TouchableOpacity style={styles.iconRight} onPress={props.nextMonth}>
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
        justifyContent: 'space-around',
    },
    title: {
        alignItems: 'center',

    },
    text: {
        color: 'white',
        fontSize: 26,
    },
    date: {
        width: '40%',
        backgroundColor: colors('greenButton'),
        alignItems: 'center',
        padding: 10,
        borderRadius: 30,

    },
    mes: {
        fontSize: 14,
    },
    iconLeft: {
        paddingTop: 5,
    },
    iconRight: {
        paddingTop: 5,
    },

});