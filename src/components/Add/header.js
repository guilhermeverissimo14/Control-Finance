import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../global/color';

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <Text style={styles.text1}> Capital</Text>
        <Text style={styles.text2}> Despesas</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: colors('greenSecondary'),
    marginTop: 60,
    borderRadius: 12,
    marginStart: 18,
    marginEnd: 18,
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  text1: {
    fontSize:25,
    color: 'white',
  },
  text2: {
    fontSize:25,
  },
});