import React, {useState} from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Stepper from "react-native-stepper-ui";
import colors from '../global/color'
import { useNavigation } from '@react-navigation/native';

export default function Cadastre() {
    const navigation = useNavigation(true);
    const [active, setActive] = useState(1);

    function handlePreview() {
        setActive(active - 1);
    }

    function handleNext() {
        setActive(active + 1);
    }

    const Step1 = () => {
        return (
            <>
                <Text style={styles.text}>1 - Informe seu nome:*</Text>
                <TextInput placeholder="Responda aqui..." placeholderTextColor={colors('white')} style={styles.input}></TextInput>
                <TouchableOpacity onPress={handleNext} style={styles.arrow}>
                    <Image 
                        source={require('../assets/arrowRight.png')}
                    />
                </TouchableOpacity>
            </>
        )
    }

    const Step2 = () => {
        return (
            <>
                <Text style={styles.text}>2 - Informe seu e-mail:*</Text>
                <TextInput placeholder="Responda aqui..." placeholderTextColor={colors('white')} style={styles.input}></TextInput>
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
            </>
        )
    }

    const Step3 = () => {
        return (
            <View />
        )
    }

    const Step4 = () => {
        return (
            <View />
        )
    }

 return (
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
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors('greenPrimary'),
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
    arrowRight:{
        marginTop: 15,
        marginLeft: '82%'
    }
});