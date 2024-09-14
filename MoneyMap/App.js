import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import Routes from './src/componentes/Routes/Routes';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="black" />
      <Routes />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0', 
  },
});
