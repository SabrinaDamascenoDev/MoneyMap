import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const Page1 = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.logo}>LOGO</Text>
    <View style={styles.containerResto}>
      <Image
        source={require("../../Imagens/imagemInicial.png")} // Caminho para o arquivo PNG
        style={styles.image}
      />
      <Text style={styles.titleInicio}>
        Assuma o Controle Total das Suas Finanças.
      </Text>
      <Text style={styles.descricaoInicio}>
        Organize cada detalhe dos seus gastos, acompanhe seu progresso financeiro e alcance suas metas com facilidade. Com o MoneyMap, você navega pelo seu dinheiro com confiança, sempre à frente dos seus objetivos.
      </Text>
      <TouchableOpacity
        style={styles.buttonLogin}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.textoBtn}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonCadastro}>
        <Text style={styles.textoBtn2}>Ainda não possui uma conta?</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0F0",
  },
  logo: {
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 40,
    marginTop: 40,
    marginBottom: 50,
  },
  containerResto: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 200,
    marginBottom: 40,
  },
  titleInicio: {
    fontWeight: "bold",
    fontSize: 25,
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: "center",
  },
  descricaoInicio: {
    paddingLeft: 30,
    paddingRight: 30,
    textAlign: 'center',
    marginTop: 20,
    color: 'gray'
  },
  buttonLogin: {
    backgroundColor: '#C8A2C8',
    width: "85%",
    textAlign: "center",
    alignItems: 'center',
    height: 50, // Defina uma altura fixa
    justifyContent: "center",
    marginTop: 60,
    borderRadius: 25,
  },
  textoBtn: {
    fontSize: 20,
    color: '#fff', // Adicione cor ao texto
  },
  buttonCadastro: {
    marginTop: 25,
  },
  textoBtn2: {
    fontSize: 22,
  },
});

export default Page1;
