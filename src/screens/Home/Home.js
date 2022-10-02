import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";

import colors from "../../global/color";
import Header from "../../components/Header/header";
import Balance from "../../components/Header/balance";
import Graphic from "../../components/Header/graphic";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
    const navigation = useNavigation();
    function handleReport() {
        navigation.navigate("report");
    }
    function handleSigIn() {
        navigation.navigate("home");
    }
    return (

        <View style={styles.container}>
            <Header />
            <Balance />
            <Graphic />
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
                    <TouchableOpacity>
                        <Image
                            source={require('../../assets/Plus.png')}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.report}>
                    <TouchableOpacity onPress={handleReport}>
                        <Image
                            source={require('../../assets/Report.png')}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View >

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors('FundoHome'),
        flex: 1,
    },
    navigation: {
        padding: 20,
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: colors('greenPrimary'),
        bottom: 0,
        position: 'absolute',
        width: '100%', height: '10%',
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
})