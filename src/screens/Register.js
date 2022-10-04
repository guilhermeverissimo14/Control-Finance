import React, {useState} from 'react';
import { View, TextInput, Text, StyleSheet, StatusBar, Alert } from 'react-native';
import Stepper from "react-native-stepper-ui";
import colors from '../global/color'
import { useNavigation } from '@react-navigation/native';

const Step1 = () => {
    return (
        <View style={styles.element}>
            <Text style={styles.text}>1 - Informe seu nome:*</Text>
            <TextInput placeholder="Responda aqui..." placeholderTextColor={colors('white')} style={styles.input}></TextInput>
        </View>
    )
}

const Step2 = () => {
    return (
        <View style={styles.element}>
            <Text style={styles.text}>2 - Informe seu e-mail:*</Text>
            <TextInput placeholder="Responda aqui..." placeholderTextColor={colors('white')} style={styles.input}></TextInput>
        </View>
    )
}

const Step3 = () => {
    return (
        <View style={styles.element}>
            <Text style={styles.text}>3 - Informe uma senha:*</Text>
            <TextInput placeholder="Responda aqui..." placeholderTextColor={colors('white')} style={styles.input}></TextInput>
        </View>
    )
}

const Step4 = () => {
    return (
        <View style={styles.element}>
            <Text style={styles.text}>4 - Confirme sua senha:*</Text>
            <TextInput placeholder="Responda aqui..." placeholderTextColor={colors('white')} style={styles.input}></TextInput>
        </View>
    )
}

const content = [
    <Step1 />, <Step2 />, <Step3 />,<Step4 />
];

export default function Cadastre() {
    const navigation = useNavigation(true);
    const [active, setActive] = useState(0);

  return (
    <View style={styles.container}>
        <StatusBar/>
        <Stepper 
            stepStyle={styles.step}
            active={active}
            buttonStyle={styles.navigation}
            content={content}
            onNext={() => setActive((p) => p + 1)}
            onBack={() => setActive((p) => p - 1)}
            onFinish={() => Alert.alert("Finish")}
        />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors('greenPrimary'),
    },
    element:{
        justifyContent: 'center',
        marginTop: '70%'
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
        flexDirection: 'row',
    },
    step:{
        backgroundColor: colors('greenLoading'),
        marginTop: '1.5%',
        justifyContent: 'flex-start', 
    },
    navigation:{
        marginHorizontal: 30,
        backgroundColor: colors('greenLoading'),
    },
});