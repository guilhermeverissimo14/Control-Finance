import React from "react";
import { View, Text, StyleSheet, StatusBar, Image } from "react-native";


import colors from "../../global/color";
//função que faz a verificação porque o "currentHeight" e so para android.
const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header() {
    return (
        <View style={styles.container}>
           
            <View style={styles.content}>
                <Image
                    source={require('../../assets/UserCircle.png')}
                    style={{ width: '30%', height: '300%' }}
                    resizeMode="contain"

                />
                <Text style={styles.User}>Olá Luana</Text>

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