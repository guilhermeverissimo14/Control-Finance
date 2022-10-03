import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";

import colors from "../../global/color";
import Header from "../../components/Home/header";
import Balance from "../../components/Home/balance";
import Graphic from "../../components/Home/graphic";
import Navigation from "../../components/Home/navigation";


export default function Home() {
    
    return (

        <View style={styles.container}>
            <Header />
            <Balance />
            <Graphic />
            <Navigation />
        </View >

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors('FundoHome'),
        flex: 1,
    },
   
})