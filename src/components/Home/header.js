import React from "react";
import { View, Text, StyleSheet, StatusBar, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

import colors from "../../global/color";

//função que faz a verificação porque o "currentHeight" e so para android.
const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
           
            <View style={styles.content}>
                <Image
                    source={require('../../assets/UserCircle.png')}
                    style={{ width: '30%', height: '300%' }}
                    resizeMode="contain"

                />

                <Text style={styles.User}>Olá Luana</Text>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image 
                        source={require('../../assets/exit.png')}
                        style={{marginLeft: '52%', width: 30, height: 30 }}
                        resizeMode="contain"
                    />
                </TouchableOpacity>

                
            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors('greenPrimary'),
        paddingTop: statusBarHeight,
        paddingEnd: 16,
        paddingStart: 16,
        paddingBottom: 44,
        flexDirection: 'row',
    },
    content: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',

    },
    User: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
    },
   
})