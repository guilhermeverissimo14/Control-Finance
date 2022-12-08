import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { PieChart } from 'react-native-svg-charts';

import colors from '../../global/color';

export default function Graphic() {

    const data = [50, 50, 40]

    const pieData = data
        .filter((value) => value > 0)
        .map((value, index) => ({
            value,
            svg: {
                fill: '#ff2222'
            },
            key: `pie-${index}`,
        }))
    
    return (

        <View style={styles.container}>
            <View style={styles.principal}>
                <PieChart style={{ height: 300 }} data={pieData} >
                </PieChart>
            </View>
        </View>

    );
}
const styles = StyleSheet.create({
    container: {

    },
    principal: {
        padding: 10,
        justifyContent: 'center',
        backgroundColor: colors('greenSecondary'),
        borderRadius: 12,
        paddingEnd: 18,
        paddingStart: 18,
        marginTop: 30,
        marginStart: 18,
        marginEnd: 18,
    },
});