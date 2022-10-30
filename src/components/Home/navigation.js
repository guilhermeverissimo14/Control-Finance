import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';

import colors from '../../global/color';
import { useNavigation } from "@react-navigation/native";

export default function Navigation() {
    const navigation = useNavigation();

    function handleReport() {
        navigation.navigate("report");
    }
    function handleSigIn() {
        navigation.navigate("home");
    }
    function handleAdd() {
        navigation.navigate("add");
    }

    return (   
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
                    <TouchableOpacity onPress={handleAdd}>
                        <Image
                            source={require('../../assets/Plus.png')}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={handleReport}>
                    <View style={styles.report}>
                        <Image
                            source={require('../../assets/Report.png')}
                            resizeMode="contain"
                        />
                    </View>
                </TouchableOpacity>

            </View>
    );
}
const styles = StyleSheet.create({
    navigation: {
        padding: 20,
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: colors('greenSecondary'),
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
});