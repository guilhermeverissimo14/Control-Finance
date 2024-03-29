import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput, Image, Modal, Alert, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import DatePicker from 'react-native-modern-datepicker';
import colors from '../../global/color';
import Header from '../../components/Add/header';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import CurrencyInput from 'react-native-currency-input';

export default function Addi() {
    const [description, setDescrition] = useState('');
    const [val, setValue] = useState(0);
    const [selectedDate, setSelectedDate] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [capital, setCapital] = useState(true);
    const [valid, setValid] = useState(false);
    const navigation = useNavigation();

    function handleReport() {
        navigation.navigate("report");
    }

    function handleSigIn() {
        navigation.navigate("home");
    }

    function handleAdd() {
        navigation.navigate("add");
    }


    useEffect(()=>{
        if (description.length < 1 || !val ||  selectedDate.length < 1 ){
            setValid(false);
        }else
        setValid(true);
    },[description, val, selectedDate])
    
    function handleModal() {
        setModalVisible(true);
    }

    function invalidForm(){
        Alert.alert("Preencha todos os campos")
    }

    function handleCapital() {
        firestore()
            .collection('capital')
            .add({
                description,
                val,
                selectedDate,
                created_at: firestore.FieldValue.serverTimestamp()

            })
            .then(() => {
                Alert.alert("Capital", "Capital cadastrado com sucesso!")
                navigation.goBack();
            })
            .catch((error) => console.log(error));
    }

    function handleExpense() {
        firestore()
            .collection('expense')
            .add({
                description,
                val,
                selectedDate,
                created_at: firestore.FieldValue.serverTimestamp()
            })
            .then(() => {
                Alert.alert("Despesas", "Despesas cadastrado com sucesso!")
                navigation.goBack();
            })
            .catch((error) => console.log(error));
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
                            <View style={[styles.linebutton]}>
                                <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => setModalVisible(!modalVisible)}
                                >
                                    <Text style={styles.textStyle}>X</Text>
                                </Pressable>
                            </View>
                            <DatePicker
                                onDateChange={(date) => { setSelectedDate(date); setModalVisible(false) }}
                                options={{
                                    backgroundColor: colors('white'),
                                    textHeaderColor: colors('greenPrimary'),
                                    textDefaultColor: colors('greenPrimary'),
                                    selectedTextColor: colors('greenPrimary'),
                                    mainColor: '#6E9987',
                                    textSecondaryColor: colors('greenPrimary'),
                                    borderColor: 'rgba(122, 146, 165, 0.1)',
                                }}
                                current="2020-07-13"
                                selected={selectedDate}
                                mode="calendar"
                                minuteInterval={30}
                                style={{ borderRadius: 10, borderTopRightRadius: 0, }}

                            />
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }

    return (
        capital ? (
            <View style={styles.container}>
                <Header onPressCapital={() => setCapital(true)} onPressDespesas={() => setCapital(false)} capital="true" />

                <SafeAreaView style={styles.menu}>

                    <View style={styles.campos}>
                        <Text style={styles.text}> Descrição</Text>
                        <TextInput placeholder="Informe a descrição..." onChangeText={setDescrition} value={description} placeholderTextColor={colors('white')} style={styles.input}></TextInput>
                    </View>

                    <View style={styles.campos}>
                        <Text style={styles.text}> Data</Text>
                        <View style={styles.icon}>
                            <TextInput placeholder="Data" value={selectedDate} placeholderTextColor={colors('white')} style={styles.input}></TextInput>
                            <TouchableOpacity onPress={handleModal}>
                                <Image style={styles.icon1}
                                    source={require('../../assets/CalendarBlank.png')}
                                />

                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.campos}>
                        <Text style={styles.text}> Valor</Text>
                        <View style={styles.input}>
                            <CurrencyInput
                                placeholder="R$ 0,00"
                                placeholderTextColor="#fff"
                                style={{ color: "#FFF" }}
                                value={val}
                                onChangeValue={setValue}
                                prefix="R$ "
                                delimiter="."
                                separator=","
                                precision={2}
                                minValue={0}
                                onChangeText={(formattedValue) => {
                                    console.log(formattedValue); // R$ 100,00
                                }}
                            />
                        </View>
                    </View>

                    <View style={styles.button}>
                        <TouchableOpacity style={styles.button1} onPress={valid ? handleCapital : invalidForm}>
                            <Text style={styles.TextButton}>
                                Adicionar
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <Date />

                    {/* Tela de navigation */}
                    <View style={styles.navigation}>
                        <View style={styles.home}>
                            <TouchableOpacity onPress={handleSigIn}>
                                <Image
                                    source={require('../../assets/Home.png')}
                                    resizeMode="contain"
                                />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.plus}>
                            <TouchableOpacity onPress={handleAdd}>
                                <Image
                                    source={require('../../assets/Plus.png')}
                                    resizeMode="contain"
                                />
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity onPress={handleReport}>
                            <View style={styles.report}>
                                <Image
                                    source={require('../../assets/Report.png')}
                                    resizeMode="contain"
                                />
                            </View>
                        </TouchableOpacity>

                    </View>
                </SafeAreaView>
            </View >

            //Tela de despesas

        ) : (
            <View style={styles.container}>
                <Header onPressCapital={() => setCapital(true)} onPressDespesas={() => setCapital(false)} capital="false" />

                <SafeAreaView style={styles.menu}>

                    <View style={styles.campos}>
                        <Text style={styles.text}> Descrição</Text>
                        <TextInput onChangeText={setDescrition} value={description} placeholder="Informe despesas..." placeholderTextColor={colors('white')} style={styles.input}></TextInput>
                    </View>

                    <View style={styles.campos}>
                        <Text style={styles.text}> Data</Text>
                        <View style={styles.icon}>
                            <TextInput onChangeText={setSelectedDate} placeholder="Data" value={selectedDate} placeholderTextColor={colors('white')} style={styles.input}></TextInput>
                            <TouchableOpacity onPress={handleModal}>
                                <Image style={styles.icon1}
                                    source={require('../../assets/CalendarBlank.png')}
                                />

                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.campos}>
                        <Text style={styles.text}> Valor</Text>
                        <View style={styles.input}>
                            <CurrencyInput
                                placeholder="R$ 0,00"
                                placeholderTextColor="#fff"
                                style={{ color: "#FFF" }}
                                value={val}
                                onChangeValue={setValue}
                                prefix="R$ "
                                delimiter="."
                                separator=","
                                precision={2}
                                minValue={0}
                                onChangeText={(formattedValue) => {
                                    console.log(formattedValue); // R$ 100,00
                                }}
                            />
                        </View>
                    </View>

                    <View style={styles.button}>
                        <TouchableOpacity style={styles.button1}  onPress={valid ? handleExpense : invalidForm}>
                            <Text style={styles.TextButton}>
                                Adicionar
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <Date />

                    {/* Tela de naviation */}
                    <View style={styles.navigation}>
                        <View style={styles.home}>
                            <TouchableOpacity onPress={handleSigIn}>
                                <Image
                                    source={require('../../assets/Home.png')}
                                    resizeMode="contain"
                                />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.plus}>
                            <TouchableOpacity onPress={handleAdd}>
                                <Image
                                    source={require('../../assets/Plus.png')}
                                    resizeMode="contain"
                                />
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity onPress={handleReport}>
                            <View style={styles.report}>
                                <Image
                                    source={require('../../assets/Report.png')}
                                    resizeMode="contain"
                                />
                            </View>
                        </TouchableOpacity>

                    </View>
                </SafeAreaView>
            </View >
        )
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
        backgroundColor: colors('buttonAdd'),
        alignItems: 'center',
        width: '80%',
        height: '23%',
        borderRadius: 30,
        marginTop: 80,
        marginStart: '8%',
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
        marginStart: 23,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '88%',
    },
    icon1: {
        marginTop: 24,
        marginRight: 24,
        tintColor: colors('white')
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
        backgroundColor: '#fff',
        borderRadius: 2,
        width: '20%',
        alignItems: 'center',
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
    },
    linebutton: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'flex-end',
    },
    text: {
        color: colors('white'),
        fontSize: 22,
    },
    campos: {
        padding: 10,
        marginTop: 20,
    },

    //navigation
    navigation: {
        padding: 20,
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: colors('greenSecondary'),
        bottom: 0,
        position: 'absolute',
        width: '100%', height: '18%',
    },
    home: {
        paddingStart: 10,
    },
    plus: {
        height: 50,
        width: '35%',
        backgroundColor: colors('greenLoading'),
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',

    },
    report: {
        paddingStart: 10,
    },
});