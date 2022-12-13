import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { PieChart } from 'react-native-svg-charts';

import colors from '../../global/color';

export default function Graphic() {

    const data = [50, 50, 40,23]

    const pieData = data
        .filter((value) => value > 0)
        .map((value, index) => ({
            value,
            svg: {
                fill: '#ffffff'
            },
            key: `pie-${index}`,
        }));
    const Label =({ slices }) => {
        return slices.map((slice, index) => {
            const {pieCentroid, data } = slice;
            return(
                <Text 
                key={`label-${index}`}
                x={pieCentroid[0]}
                y={pieCentroid[1]}
                fill="black"
                
                textAnchor="middle"
                alignmeentBaseline={"middle"}
                fontSize={22}
                />
            )
        })
    }       
    return (

        <View style={styles.container}>
            <View style={styles.principal}>
                <PieChart style={{ height: 300 }} data={pieData} >
                    <Label/>
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