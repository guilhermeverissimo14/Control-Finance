import { useState } from 'react';
import React, { useEffect } from 'react';
import { View, Image, StyleSheet, ActivityIndicator, Text, Button } from 'react-native';
import colors from '../../global/color';
import Lottie from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

export default function loading() {
    const naviation = useNavigation();

    return (
        <View style={styles.container} >
            <View style={styles.imgs}>
                <Image
                    source={require('../../assets/logo.png')}
                />
            </View>
            <Lottie style={styles.imgs1}
                source={require('../../assets/loading2.json')}
                autoPlay
                loop={false}
                onAnimationFinish={() => naviation.navigate('signin')}
                speed={0.8}

            />
            
        </View>

    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors('greenLoading'),
        alignItems: 'center',
    },
    imgs: {
        marginTop: 150,
    },
    imgs1: {
        marginTop: 150,
    },
});