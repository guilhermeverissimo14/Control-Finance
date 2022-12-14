import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Balance from '../../components/Report/balance';
import Header from "../../components/Report/header";
import colors from '../../global/color';
import Navigation from '../../components/Home/navigation';

export default function Report() {
  const date = new Date();
  const [currentYear, setCurrentYear] = useState(date.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(date.getMonth() + 1);

  const backMonth = () => {
    if (currentMonth === 1) {
      setCurrentMonth(12);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  }

  const nextMonth = () => {
    if (currentMonth === 12) {
      setCurrentMonth(1);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  }

  return (
    <View style={styles.container}>
      <Header currentMonth={currentMonth} currentYear={currentYear} backMonth={backMonth} nextMonth={nextMonth}/>
      <Balance currentMonth={currentMonth} currentYear={currentYear} backMonth={backMonth} nextMonth={nextMonth}/>
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