import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import colors from '../../global/color';
import { useState } from 'react';
import firestore from '@react-native-firebase/firestore';

import { useNavigation } from '@react-navigation/native';


export default function Balance() {
    const [data, setData] = useState([]);
    const [expemseList, setExpemseList] = useState([]);
    const [expense, setExpense] = useState(0);
    const [capital, setCapital] = useState(0);
    const [balance, setBalance] = useState(0);
    const navigation = useNavigation();

    const getBalance = () => {
        firestore()
            .collection('capital')
            .get()
            .then((querySnapshot) => {
                let d = [];
                querySnapshot.forEach((doc, index) => {
                    //console.log(doc.description, " => ", doc.data());
                    const balance = {
                        id: index.toString(),
                        description: doc.data().description,
                        val: doc.data().val
                    };
                    d.push(balance);
                });
                setData(d);
            })
            .catch((e) => {
                console.log('Erro: ' + e);
            });
    }

    const getExpense = () => {
        firestore()
            .collection('expense')
            .get()
            .then((querySnapshot) => {
                let d = [];
                querySnapshot.forEach((doc, index) => {
                    //console.log(doc.description, " => ", doc.data());
                    const value = {
                        id: index.toString(),
                        description: doc.data().description,
                        val: doc.data().val
                    };
                    d.push(value);
                });
                setExpemseList(d);
                expemseList.forEach((e) => {
                    //console.log(e.val);
                })

            })
            .catch((e) => {
                console.log('Erro: ' + e);
            });
    }

    function sumExpense() {
        let sum = 0;
        
            expemseList.forEach((e) => {
                if ((e.val != NaN) && !e.val == '') 
                sum += parseFloat(e.val);
            });
    
        setExpense(sum);
        //console.log(sum);
    }

    function sumCapital() {
        var sum = 0;
        data.forEach((element) => {
            if ((element.val != NaN) && !element.val == '') {
                sum = sum + parseFloat(element.val);
                // console.log(element.val);
            }
        })
        setCapital(sum);
    }

    function calculateBalance(){
        setBalance(capital - expense);
    }

    useEffect(() => {
        getBalance();
        sumCapital();
        getExpense();
        sumExpense();
        calculateBalance();
    }, [])

    function handleReport() {
        navigation.navigate("report");
    }
    return (
        <View style={styles.container}>
            <View style={styles.principal}>
                <View style={styles.item}>
                    <Text style={styles.text}>Capital:</Text>
                    <View style={styles.valores}>

                        <Text style={styles.simbolo1}> R$ </Text>
                        <Text style={styles.valor}> {Number(capital)?.toFixed(2) }</Text>
                        <TouchableOpacity onPress={handleReport}>
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

                        <Text style={styles.simbolo}> R$ </Text>
                        <Text style={styles.valor1}>{Number(expense)?.toFixed(2)}</Text>
                        <TouchableOpacity onPress={handleReport}>
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
                        <Text style={styles.valor2}>{Number(balance)?.toFixed(2)}</Text>

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
