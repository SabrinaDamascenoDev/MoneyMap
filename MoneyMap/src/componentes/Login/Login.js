import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Page2 = () => (
  <View style={styles.container}>  
    <View style={styles.logoVoltar}>
        <Text style={styles.logo}>LOGO</Text>
    </View>
    <View>
        <Text>Login</Text>
        <Text>Bem-vindo(a) de volta ao MoneyMap.</Text>
    </View>
  </View>
);

export default Page2;

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    logoVoltar:{
        marginTop: 90,
    },
    logo:{
        fontSize: 25, 
        fontWeight: 'bold',
        marginLeft: 30
    }
})