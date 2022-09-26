import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-web';
import colors from '../../global/color';

export default function Balance() {
    return (
        <View style={StyleSheet.container}>

            <View style={styles.principal}>
                <View style={styles.item}>
                    <Text style={styles.text}>Capital:</Text>
                    <View style={styles.valores}>

                        <Text style={styles.simbolo}>R$</Text>
                        <Text style={styles.valor}> 1800,00</Text>

                    </View>
                </View>

                <View style={styles.item1}>
                    <Text style={styles.text}>Despesas:</Text>
                    <View style={styles.valores}>

                        <Text style={styles.simbolo}>R$</Text>
                        <Text style={styles.valor1}> 1800,00 </Text>

                    </View>
                </View>

                <View style={styles.item2}>
                    <Text style={styles.text}>Saldo:</Text>
                    <View style={styles.valores}>

                        <Text style={styles.simbolo}> R$ </Text>
                        <Text style={styles.valor2}> 1800,00</Text>

                    </View>
                </View>
            </View>
        </View> 
    );
}
const styles = StyleSheet.create({
    container: {
        
    },
    principal: {

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
    },
    item1: {
        flexDirection: 'row',
    },
    item2: {
        flexDirection: 'row',
    },
    text: {
        fontSize: 22,
        color: 'white',
    },

    valores: {
        flexDirection: 'row',
    },
    valor:{
        color: '#063263',
        fontSize: 22,
    },
    valor1:{
        color: 'red',
        fontSize: 22,
    },
    valor2:{
        color: '#90ff7e',
        fontSize: 22,
    },
    simbolo:{
        fontSize: 22,
        color: 'white',
    },
});
