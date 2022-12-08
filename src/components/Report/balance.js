import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet,  FlatList} from 'react-native';
import colors from '../../global/color';
import firestore from '@react-native-firebase/firestore';

export default function Report() {
    const [data, setData] = useState([]);
    const Item = ({title}) => (
        <View>
            <Text style={styles.text}> {title}</Text>
            <Text style={styles.text}>{title}</Text>
        </View>
        
    );

    const renderItem = ({item}) => (
        <Item title={title}/>
    );

    const getBalance = () => {
        firestore()
        .collection('capital')
        .get()
        .then((querySnapshot) => {
            let d = [];
            querySnapshot.forEach((doc) => {
                console.log(doc.description, " => ", doc.data());
                const balance = {
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

    useEffect(() => {
        getBalance();
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.description}
            />
            {/* <View style={styles.item}>
                <Text style={styles.text}> Sálario</Text>
                <Text style={styles.text}> R$ 1.800,00</Text>
            </View>
            <View style={styles.line} />
            <View style={styles.item1}>
                <Text style={styles.text}> Conta </Text>
                <Text style={styles.text}> R$ 74,19</Text>
            </View> */}
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