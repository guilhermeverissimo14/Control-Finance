import React, {useState} from 'react';
import {StatusBar} from 'expo-status-bar';
import { View, TextInput, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import colors from '../global/color'
import { useNavigation } from '@react-navigation/native';

export default function Cadastre() {
    const [active, setActive] = useState(1);

    function handlePreview() {
        setActive(active - 1);
    }

    function handleNext() {
        setActive(active + 1);
    }

    const Step1 = () => {
        return (
            <View style={styles.element}>
                <View style={styles.barContainer}>
                    <View style={styles.progress}/>
                    <View style={styles.progressCheck}/>
                </View>
                <View style={styles.step}>
                    <Text style={styles.text}>1 - Informe seu nome:*</Text>
                    <TextInput placeholder="Responda aqui..." placeholderTextColor={colors('white')} style={styles.input}></TextInput>
                    <View style={styles.align}>
                        <View/>
                        <TouchableOpacity onPress={handleNext} style={styles.arrowRight1}>
                            <Image 
                                source={require('../assets/arrowRight.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                
            </View>
        )
    }
    
    const Step2 = () => {
        return (
            <View style={styles.element}>
                <View style={styles.barContainer}>
                    <View style={styles.progress}/>
                    <View style={styles.progressCheck}/>
                </View>
                <View style={styles.step}>
                    <Text style={styles.text}>2 - Informe seu e-mail:*</Text>
                    <TextInput placeholder="Responda aqui..." placeholderTextColor={colors('white')} style={styles.input}></TextInput>
                    <View style={styles.align}>
                        <TouchableOpacity onPress={handlePreview} style={styles.arrowLeft}>
                            <Image 
                                source={require('../assets/arrowLeft.png')}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleNext} style={styles.arrowRight}>
                            <Image 
                                source={require('../assets/arrowRight.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
    
    const Step3 = () => {
        return (
            <View style={styles.element}>
                <View style={styles.barContainer}>
                    <View style={styles.progress}/>
                </View>
                <View style={styles.step}>
                    <Text style={styles.text}>3 - Informe uma senha:*</Text>
                    <TextInput placeholder="Responda aqui..." placeholderTextColor={colors('white')} style={styles.input}></TextInput>
                    <View style={styles.align}>
                        <TouchableOpacity onPress={handlePreview} style={styles.arrowLeft}>
                            <Image 
                                source={require('../assets/arrowLeft.png')}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleNext} style={styles.arrowRight}>
                            <Image 
                                source={require('../assets/arrowRight.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
    
    const Step4 = () => {
        return (
            <View style={styles.element}>
                <View style={styles.barContainer}>
                    <View style={styles.progress}/>
                </View>
                <View style={styles.step}>
                    <Text style={styles.text}>4 - Confirme sua senha:*</Text>
                    <TextInput placeholder="Responda aqui..." placeholderTextColor={colors('white')} style={styles.input}></TextInput>
                    <View style={styles.align}>
                        <TouchableOpacity onPress={handlePreview} style={styles.arrowLeft}>
                            <Image 
                                source={require('../assets/arrowLeft.png')}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleNext} style={styles.arrowRight}>
                            <Image 
                                source={require('../assets/arrowRight.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

  return (
    <>
        <View style={styles.container}>
            {active === 1 && (
                <Step1 />
            )}
            {active === 2 && (
                <Step2 />
            )}
            {active === 3 && (
                <Step3 />
            )}
            {active === 4 && (
                <Step4 />
            )}
        </View>
    </>  
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors('greenPrimary'),
    },
    barContainer:{
        flex: 0.10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    progress:{
        backgroundColor: colors('white'),
        width: '90%',
        height: '14%',
        borderRadius: 20,
    },
    progressCheck:{
        backgroundColor: colors('greenLoading'),
    },
    element:{
        flex: 1,
    },
    step:{
        flex: 0.8,
        justifyContent: 'center',

    },
    text:{
        marginHorizontal: 30,
        color: colors('white'),
        fontSize: 18,
    },
    input:{
        marginTop:15,
        marginHorizontal: 30,
        borderBottomWidth: 1,
        width: '80%',
        borderBottomColor: colors('white'),
        color: colors('white'),
    },
    align:{
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    arrowRight1:{
        marginTop: 15,
        marginLeft: '100%',
    },
    arrowLeft:{
        marginTop: 15,
        marginHorizontal: 30,
    },
    arrowRight:{
        marginTop: 15,
        marginLeft: '71%',
        marginHorizontal: 30,
    },
});