import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import colors from '../../global/color';

export default function Balance() {
    return (
        <View style={styles.container}>
            <View style={styles.principal}>
                <View style={styles.item}>
                    <Text style={styles.text}>Capital:</Text>
                    <View style={styles.valores}>

                        <Text style={styles.simbolo1}>R$</Text>
                        <Text style={styles.valor}> 1800,00</Text>
                        <TouchableOpacity>
                            <Image style={styles.icon}
                                source={require('../../assets/Edit.png')}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.line} />

                <View style={styles.item1}>
                    <Text style={styles.text}>Despesas:</Text>
                    <View style={styles.valores}>

                        <Text style={styles.simbolo}> R$</Text>
                        <Text style={styles.valor1}> 1800,00 </Text>
                        <TouchableOpacity>
                            <Image style={styles.icon1}
                                source={require('../../assets/Edit.png')}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.line} />

                <View style={styles.item2}>
                    <Text style={styles.text}>Saldo:</Text>
                    <View style={styles.valores}>

                        <Text style={styles.simbolo2}> R$ </Text>
                        <Text style={styles.valor2}> 1800,00</Text>

                    </View>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
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
    item: {
        flexDirection: 'row',
        marginStart: 18,
    },
    item1: {
        flexDirection: 'row',
        marginStart: 18,
    },
    item2: {
        flexDirection: 'row',
        marginStart: 18,
    },
    text: {
        fontSize: 22,
        color: 'white',
    },

    valores: {
        flexDirection: 'row',
        marginStart: 13,
    },
    valor: {
        color: '#063263',
        fontSize: 22,

    },
    valor1: {
        color: 'red',
        fontSize: 22,
    },
    valor2: {
        color: '#90ff7e',
        fontSize: 22,
        marginStart: 0
    },
    simbolo: {
        fontSize: 22,
        color: 'white',
        marginStart: 14,
    },
    simbolo1: {
        fontSize: 22,
        color: 'white',
        marginStart: 40,
    },
    simbolo2: {
        fontSize: 22,
        color: 'white',
        marginStart: 48,
    },
    icon: {
        marginStart: 32,
    },
    icon1: {
        marginStart: 20,
    },
    line: {
        borderBottomWidth: 1,
        borderColor: 'white',
        marginVertical: 10,
    },
});
