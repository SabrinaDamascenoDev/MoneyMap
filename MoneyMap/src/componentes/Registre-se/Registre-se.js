import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  StyleSheet,
} from "react-native";

const Page3 = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.logoSessao}>
      <Text style={styles.logo}>LOGO</Text>
      <TouchableOpacity>
        <Image
          style={styles.imageVoltar}
          source={require("../../Imagens/paraLado.png")}
        />
      </TouchableOpacity>
    </View>
    <View style={styles.sessaoRegistrar}>
      <Text style={styles.titleRegis}>Registre-se</Text>
      <Text style={styles.descricaoRegis}>Bem-vindo(a) ao MoneyMap.</Text>
    </View>
    <View style={styles.inputs}>
      <Text style={styles.textInputTop}>Nome</Text>
      <View style={styles.input}>
        <View style={styles.backgroundImage}>
          <Image
            style={styles.icone}
            source={require("../../Imagens/Person.png")}
          />
        </View>
        <TextInput placeholder="Digite aqui o seu nome" style={styles.textInput} />
      </View>
      <Text style={styles.textInputTop}>Email</Text>
      <View style={styles.input}>
        <View style={styles.backgroundImage}>
          <Image
            style={styles.icone}
            source={require("../../Imagens/Person.png")}
          />
        </View>
        <TextInput placeholder="Digite aqui o seu Emil" style={styles.textInput} />
      </View>
      <Text style={styles.textInputTop}>Senha</Text>
      <View style={styles.input}>
        <View style={styles.backgroundImage}>
          <Image
            style={styles.icone}
            source={require("../../Imagens/Person.png")}
          />
        </View>
        <TextInput placeholder="*********" style={styles.textInput} />
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoSessao: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "9%",
  },
  logo: {
    fontSize: 25,
    fontWeight: "900",
    marginLeft: "9%",
  },
  imageVoltar: {
    marginRight: "9%",
  },
  sessaoRegistrar: {
    marginTop: "12%",
    alignItems: "center",
  },
  titleRegis: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: "2%",
  },
  descricaoRegis: {
    color: "gray",
  },
  inputs: {
    marginTop: "6%",
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#CBA2CB',
    borderWidth: 0.5,
    borderRadius: 10,
    width: '87%',
    height: 50, // Defina um valor fixo para a altura
    marginLeft: '6%',
  },
  backgroundImage: {
    backgroundColor: '#C8A2C8',
    width: '14%',
    height: '100%', // Alinhe a altura com o contêiner pai
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    padding: 0,
    marginRight: '3%'
  },
  icone: {
    width: '40%',
    height: '40%',
  },
  textInput: {
    flex: 1,
    padding: 10,
  },
  textInputTop:{
    fontSize: 20,
    marginLeft: '6.5%',
    marginBottom: '1%',
    fontWeight: '100',
    marginTop: '5%'

  },
});

export default Page3;
