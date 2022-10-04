import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import colors from '../../global/color';

export default function Report() {
    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <Text style={styles.text}> Sálario</Text>
                <Text style={styles.text}> R$ 1.800,00</Text>
            </View>
            <View style={styles.line} />
            <View style={styles.item1}>
                <Text style={styles.text}> Conta de luz</Text>
                <Text style={styles.text}> R$ 74,19</Text>
            </View>
            <View style={styles.line} />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        height: '65%',
        padding: 10,
        backgroundColor: colors('greenSecondary'),
        borderRadius: 12,
        paddingEnd: 18,
        paddingStart: 18,
        marginTop: 30,
        marginStart: 18,
        marginEnd: 18,
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    item1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },

    line: {
        borderBottomWidth: 1,
        borderColor: 'white',
        marginVertical: 10,
    },
    text: {
        color: 'white',
        fontSize: 18,
    },
});    