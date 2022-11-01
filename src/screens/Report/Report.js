import React from 'react';
import { View, StyleSheet } from 'react-native';

import Balance from '../../components/Report/balance';
import Header from "../../components/Report/header";
import colors from '../../global/color';
import Navigation from '../../components/Home/navigation';

export default function Report() {
  return (
    <View style={styles.container}>
      <Header />
      <Balance />
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors('FundoReport'),
    flex: 1,
  },

});