import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, } from 'react-native';
import colors from './src/global/color';

export default function App() {
  return (

    <View style={styles.container}>
      <Image
        source={require('')}
        resizeMode="contain"
        style={{ width: '50%', height: '30%' }}
      />

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors('greenPrimary'),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
