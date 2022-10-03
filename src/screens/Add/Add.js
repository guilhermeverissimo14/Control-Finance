import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import Navigation from '../../components/Home/navigation';

export default function Add() {
 return (
   <View style={styles.container}>
        <Navigation/>
        <Text>
            testeeeeee
        </Text>
   </View>
  );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors('FundoHome'),
        flex: 1,
    },
   
})