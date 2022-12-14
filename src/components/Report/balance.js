import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet,  FlatList} from 'react-native';
import colors from '../../global/color';
import firestore from '@react-native-firebase/firestore';
import { format, compareAsc } from 'date-fns';

export default function Report(props) {
    const [data, setData] = useState([]); 

    const Item = ({ description, value }) => (
        <>
        <View style={styles.list}>
            <View style={{width:'60%'}}>
                <Text numberOfLines={1} ellipsizeMode='tail' style={styles.text}>{description}</Text>
            </View>
            <Text style={styles.text}>R$ {Number(value)?.toFixed(2)}</Text>
        </View>
        <View style={styles.line} />    
        </>
    );

    const renderItem = ({ item }) => (
        <Item description={item.description} value={item.val}/>
    );

    const getBalance = () => {
        firestore()
        .collection('expense')
        .get()
        .then((querySnapshot) => {
            let d = [];
            let mes = [];
            let ano = [];
            querySnapshot.forEach((doc, index) => {
                const balance = {
                    id: index.toString(),
                    description: doc.data().description,
                    selectedDate: doc.data().selectedDate,
                    val: doc.data().val
                };
                ano = balance.selectedDate[0] + balance.selectedDate[1] + balance.selectedDate[2] + balance.selectedDate[3];
                mes = balance.selectedDate[5] + balance.selectedDate[6];
                if(mes == props.currentMonth && ano == props.currentYear){
                    d.push(balance);
                }
            });
            setData(d);
        })
        .catch((e) => {
            console.log('Erro: ' + e);
        });
    }

    useEffect(() => {
        getBalance();
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
            showsVerticalScrollIndicator = {false}
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
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
    list:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
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
        textTransform: 'capitalize',
    },
});    