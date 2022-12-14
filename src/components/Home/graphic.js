import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { PieChart } from 'react-native-svg-charts';
import {Text} from 'react-native-svg'
import { useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import colors from '../../global/color';



export default function Graphic() {

    const [data, setData] = useState([]);
    const [expemseList, setExpemseList] = useState([]);
    const [expense, setExpense] = useState(0);
    const [capital, setCapital] = useState(0);
    const [balance, setBalance] = useState(0);

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
                sumCapital();
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
                sumExpense();

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
                //console.log(element.val);
            }
        })
        setCapital(sum);
    }

    function calculateBalance() {
        setBalance(capital - expense);
    }

    useEffect(() => {
       
        getBalance();
        getExpense();
        calculateBalance();
    }, [expense, capital, expemseList, balance])


    const valores = [capital, expense]

    const pieData = valores.map((value, index) => ({
        value,
            key: `${index}-${value}`,
            svg: {
                 fill: (
                    '#' + '4169e1' //, '#' + '0000ff'
                    //'#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000'

                 ).slice(0,7)
                //colors : ['#000000', '#fff', '#666', '#f5f5f5'],
                //fill: ['#000000', '#fff', '#666', '#f5f5f5']

               
            }
    }));


    const Label = ({ slices }) => {
        return slices.map((slice, index) => {
            const { pieCentroid, data } = slice;
            // console.log(valores)
            return (
                <Text
                    key={`label-${index}`}
                    x={pieCentroid[0]}
                    y={pieCentroid[1]}
                    fill="black"
                    textAnchor={'middle'}
                    alignmeentBaseline={'middle'}
                    fontSize={22}
                >
                    {data.value}
                </Text>
            )
        })
    }
    return (

        <View style={styles.container}>
            <View style={styles.principal}>
                <PieChart style={{ height: 300 }} data={pieData} 
                >
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