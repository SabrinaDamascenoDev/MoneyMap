import React from 'react';
import Routes from './src/componentes/Routes/Routes';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';



const app = initializeApp(FirebaseConfig);
const auth = getAuth(app);



export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="black"
      />
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
