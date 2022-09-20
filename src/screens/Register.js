import React, {useState} from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import colors from '../global/color'

export default function Register() {
    const [count, setCount] = useState(1);

    const Step1 = () => {
        return(
            <View style={styles.container}>
                <Text style={styles.text}>1-Informe seu nome:*</Text>

            </View>
        )
    }

    const Step2 = () => {
        return(
            <View />
        )
    }
     
    const Step3 = () => {
        return(
            <View />
        )
    }

    const Step4 = () => {
        return(
            <View />
        )
    }


 return (
    <Step1>
    </Step1>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors('greenPrimary'),
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    text: {
        marginHorizontal: 40,
        fontSize: 20,
        colors: colors('white')

    }
});