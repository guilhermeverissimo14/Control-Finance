import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput, Image, Modal, Alert, Pressable } from 'react-native';

import DatePicker from 'react-native-modern-datepicker';

import colors from '../../global/color';
import Navigation from '../../components/Home/navigation';
import Header from '../../components/Add/header';




export default function Addi() {
    const [selectedDate, setSelectedDate] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    function handleModal() {
        setModalVisible(true);
    }

    const Date = () => {
        return (
            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}

                >
                    <View style={styles.centeredContet}>
                        <View style={styles.modalView}>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={styles.textStyle}>Fechar</Text>
                            </Pressable>
                            <DatePicker
                                onDateChange={(date) => { setSelectedDate(date); setModalVisible(false)}}
                                options={{
                                    backgroundColor: colors('white'),
                                    textHeaderColor: colors('greenPrimary'),
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
                            />

                        </View>
                    </View>
                </Modal>
            </View>
        )
    }

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


                    <View style={styles.icon}>
                        <TextInput placeholder="Data" value={selectedDate} placeholderTextColor={colors('white')} style={styles.input}></TextInput>
                        <TouchableOpacity onPress={handleModal}>
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
            <Date />
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
    icon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
    },
    centeredView: {
        flex: 1,

        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        flex: 1,
        justifyContent: "center",
        // margin: 2,
        // backgroundColor: "white",
        borderRadius: 20,
        // padding: 35,
        alignItems: "center",
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 2
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 4,
        // elevation: 5
    },
    centeredContet: {
        padding: 30,
        flex: 1,
        justifyContent: "center"
    },
    button: {
        padding: 10,
    },
    buttonClose: {
        backgroundColor: colors('white'),
    },
});