import React from 'react';
import Routes from './src/componentes/Routes/Routes';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="black"// Fundo preto na barra de status
      />
      <Routes />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0', // Fundo branco para o conteúdo do aplicativo
  },
});
