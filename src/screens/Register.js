import React, {useState} from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import Stepper from "react-native-stepper-ui";
import colors from '../global/color'
import { useNavigation } from '@react-navigation/native';

export default function Cadastre() {
    const navigation = useNavigation(true);
    const [active, setActive] = useState(1);

    const MyComponent = (props) => {
        return (
          <View>
            <Text>{props.title}</Text>
          </View>
        );
    };

    const content = [
        <MyComponent title="Nome" />,
        <MyComponent title="Email" />,
        <MyComponent title="Senha" />,
    ];

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
                <TouchableOpacity onPress={handleNext}>
                    <Image style={styles.arrowRight1}
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
                <View style={styles.align}>   
                    <TouchableOpacity onPress={handlePreview}>
                        <Image style={styles.arrowLeft}
                            source={require('../assets/arrowLeft.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleNext}>
                        <Image style={styles.arrowRight}
                            source={require('../assets/arrowRight.png')}
                        />
                    </TouchableOpacity>
                </View> 
            </>
        )
    }

    const Step3 = () => {
        return (
            <>
                <Text style={styles.text}>3 - Informe uma senha:*</Text>
                <TextInput placeholder="Responda aqui..." placeholderTextColor={colors('white')} style={styles.input}></TextInput>
                <View style={styles.align}>   
                    <TouchableOpacity onPress={handlePreview}>
                        <Image style={styles.arrowLeft}
                            source={require('../assets/arrowLeft.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleNext}>
                        <Image style={styles.arrowRight}
                            source={require('../assets/arrowRight.png')}
                        />
                    </TouchableOpacity>
                </View> 
            </>
        )
    }

    const Step4 = () => {
        return (
            <>
                <Text style={styles.text}>4 - Confirme sua senha:*</Text>
                <TextInput placeholder="Responda aqui..." placeholderTextColor={colors('white')} style={styles.input}></TextInput>
                <View style={styles.align}>   
                    <TouchableOpacity onPress={handlePreview}>
                        <Image style={styles.arrowLeft}
                            source={require('../assets/arrowLeft.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleNext}>
                        <Image style={styles.arrowRight}
                            source={require('../assets/arrowRight.png')}
                        />
                    </TouchableOpacity>
                </View> 
            </>
        )
    }

 return (
    <View style={styles.container}>
        <Stepper
            active={active}
            content={content}
            onNext={() => handleNext()}
            onBack={() => handlePreview()}
            onFinish={() => Alert.alert("Finish")}
        />
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
    align:{
        flexDirection: 'row',
    },
    arrowRight1:{
        marginTop: 15,
        marginLeft: '80%',
    },
    arrowLeft:{
        marginTop: 15,
        marginHorizontal: 30,
    },
    arrowRight:{
        marginTop: 15,
        marginLeft: '72%',
        marginHorizontal: 30,
    }
});