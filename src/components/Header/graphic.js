import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';

import colors from '../../global/color';

export default function Graphic() {
    return (
        <View style={styles.container}>
            <View style={styles.principal}>
                <Image
                  source={require('../../assets/graphic.png')}
                   resizeMode="contain"  
                />
            </View>
        </View>

    );
}
const styles = StyleSheet.create({
    container: {
        
    },
    principal: {

        justifyContent: 'center',
        backgroundColor: colors('greenSecondary'),
        borderRadius: 12,
        paddingEnd: 18,
        paddingStart: 18,
        marginTop: 30,
        marginStart: 18,
        marginEnd: 18,
    },
});