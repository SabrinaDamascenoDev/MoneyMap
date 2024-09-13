import React from 'react';
import Routes from './src/componentes/Routes/Routes';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';


const firebaseConfig = {
  apiKey: "AIzaSyC8OkMY51zv_7o6YfLaplHoUmoeQUnFI_E",
  authDomain: "moneymap-198ca.firebaseapp.com",
  projectId: "moneymap-198ca",
  storageBucket: "moneymap-198ca.appspot.com",
  messagingSenderId: "922708214331",
  appId: "1:922708214331:web:7183d159c575f4d892121e",
  measurementId: "G-23ZM98M69H"

};


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
