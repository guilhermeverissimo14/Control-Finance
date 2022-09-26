import React from "react";
import { View, Text, StyleSheet } from "react-native";

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

        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors('FundoHome'),
    },
})