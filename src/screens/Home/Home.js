import React from "react";
import { View, StyleSheet, Text } from "react-native";

import colors from "../../global/color";
import Header from "../../components/Header/header";
import Balance from "../../components/Header/balance";
import Graphic from "../../components/Header/graphic";


export default function Home() {
    return (

        <View style={styles.container}>
            <Header />
            <Balance />
            <Graphic />
            <View style={styles.navigation}>
                
            </View>
        </View >

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors('FundoHome'),
        flex:1,
    },
    navigation: {
        backgroundColor: colors('greenPrimary'),
        bottom: 0,
        position: 'absolute',
        width: '100%', height: '10%',
    },
})