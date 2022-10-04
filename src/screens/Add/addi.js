import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput, Image } from 'react-native';

import DatePicker from 'react-native-modern-datepicker';

import colors from '../../global/color';
import Navigation from '../../components/Home/navigation';
import Header from '../../components/Add/header';


export default function Addi() {
    const [selectedDate, setSelectedDate] = useState('');
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.menu}>
                <View>
                    <Text> Descrição</Text>
                    <TextInput placeholder="Informe a descrição..." placeholderTextColor={colors('white')} style={styles.input}></TextInput>
                </View>

                <View>
                    <Text> Data</Text>

                    {/* <DatePicker
                        options={{
                            backgroundColor: '#090C08',
                            textHeaderColor: '#FFA25B',
                            textDefaultColor: '#F6E7C1',
                            selectedTextColor: '#fff',
                            mainColor: '#F4722B',
                            textSecondaryColor: '#D6C7A1',
                            borderColor: 'rgba(122, 146, 165, 0.1)',
                        }}
                        current="2020-07-13"
                        selected="2020-07-23"
                        mode="calendar"
                        minuteInterval={30}
                        style={{ borderRadius: 10 }}
                    /> */}
                    <View style={styles.icon}>
                        <TextInput placeholder="Data" placeholderTextColor={colors('white')} style={styles.input}></TextInput>
                        <TouchableOpacity>
                            <Image
                                source={require('../../assets/CalendarBlank.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <View>
                    <Text> Valor</Text>
                    <TextInput placeholder="R$ 0,00" placeholderTextColor={colors('white')} style={styles.input}></TextInput>
                </View>

                <View style={styles.button}>
                    <TouchableOpacity style={styles.button1}>
                        <Text style={styles.TextButton}>
                            Adicionar
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Navigation />
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors('FundoReport'),
        flex: 1,
    },
    button: {
        alignItems: 'center',
    },
    button1: {
        backgroundColor: colors('greenLoading'),
        alignItems: 'center',
        width: '80%',
        height: '10%',
        borderRadius: 30,
        marginTop: 450,
    },

    TextButton: {
        fontSize: 35,
    },
    input: {
        padding: 10,
        marginTop: 15,
        marginHorizontal: 30,
        borderBottomWidth: 1,
        width: '80%',
        borderBottomColor: colors('white'),
        color: colors('white'),
    },
    icon:{
        flexDirection: 'row',
        justifyContent: '',
    },
});