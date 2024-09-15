import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { auth } from '../FirebaseConfig/FirebaseConfig';
import { NavigationContainer } from '@react-navigation/native';

const Page5 = ({navigation}) => {

  const handleSingOut = () => {
    auth
      .signOut()
      .then(() => {
        
      })
      .catch(error => alert(error.message));
  }
  return(
  <View style={styles.container}>
    <Text>Oi, {auth.currentUser.email}</Text>
    <TouchableOpacity style={styles.BtnSair} onPress={handleSingOut}>
      <Text>Sair</Text>
    </TouchableOpacity>
  </View>
)};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex', 
    


  },
  BtnSair:{
    backgroundColor: '#C8A2C8',
    width: "85%",
    textAlign: "center",
    alignItems: 'center',
    height: 50,
    justifyContent: "center",
    marginTop: 40,
    borderRadius: 25,
  }
})
export default Page5;
