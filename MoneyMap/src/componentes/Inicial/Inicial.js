import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Page1 = () => (
  <View style={styles.container}>
    <Text style={styles.logo}>LOGO</Text>
    <Image
      source={require('../../Imagens/imagemInicial.png')} // Caminho para o arquivo PNG
      style={styles.image}
    />
    <Text style={styles.titleInicio}>Assuma o Controle Total das Suas Finanças.</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    alignItems: 'center',
  },
  image: {
    width: 300, // Largura da imagem
    height: 200,
    justifyContent: 'top', 
    alignItems: 'top',
    marginTop: 20,
    
  },
  titleInicio: {
    fontWeight: 'bold',
    fontSize: 25,
    paddingLeft:20,
    paddingRight: 20,
    textAlign: 'center',
    marginTop: 25
  },

  logo:{
    marginTop: 100,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'left',
  }

});

export default Page1;
