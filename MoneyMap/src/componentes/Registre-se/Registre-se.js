import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  StyleSheet,
  ScrollView
} from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../FirebaseConfig/FirebaseConfig";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Page3 = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState('');


  const handleShowPass = () => {
    setShowPassword(!showPassword);
  }

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredentials => {
        const user = userCredentials.user;

      })
      .catch(error => 
      {
        if(error.code === 'auth/email-already-in-use'){
          alert("Email já está em uso!!");
        } else {
          alert(error.message);
        }
      }
      );
  };

  return(
  <ScrollView>
  <View style={styles.container}>
    <View style={styles.logoSessao}>
      <Text style={styles.logo}>LOGO</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Inicial")}>
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
        <TextInput
          placeholder="Digite aqui o seu nome"
          style={styles.textInput}
        />
      </View>
      <Text style={styles.textInputTop}>Email</Text>
      <View style={styles.input}>
        <View style={styles.backgroundImage}>
          <Image
            style={styles.icone}
            source={require("../../Imagens/email.png")}
          />
        </View>
        <TextInput
          placeholder="Digite aqui o seu Emil"
          style={styles.textInput}
          value={ email}
          onChangeText={text => setEmail(text)}
        />
      </View>
      <Text style={styles.textInputTop}>Senha</Text>
      <View style={styles.input}>
        <View style={styles.backgroundImage}>
          <Image
            style={styles.icone}
            source={require("../../Imagens/senha.png")}
          />
        </View>
        <TextInput placeholder="*********" style={styles.textInput} 
          value={ password}
          onChangeText={text => setPassword(text)}
          secureTextEntry = {!showPassword}
        />
        <MaterialCommunityIcons
          style={styles.olho}
          name={showPassword ? 'eye-off' : 'eye'}
          onPress={handleShowPass}
          size={20}
          
        />
      </View>
      <View style={styles.botoes}>
      <TouchableOpacity
        style={styles.buttonLogin}
        onPress={handleSignUp}
      >
        <Text style={styles.textoBtn}>Registrar</Text>
      </TouchableOpacity>

      <View style={styles.linhaGoogle}>
        <View style={styles.linha} />
        <Text style={styles.textLinhaGoogle}>ou registrar com</Text>
        <View style={styles.linha}></View>
      </View>
      <TouchableOpacity
        style={styles.buttonLoginGoogle}
        onPress={() => navigation.navigate("")}
      >
        <Image source={require("../../Imagens/google.png")}></Image>
        <Text style={styles.textoBtnGoogle}>Registre-se com o Google</Text>
      </TouchableOpacity>

      <Text style={styles.textSemConta}>
        Já possui uma conta?{" "}
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.textBold}>Entrar</Text>
        </TouchableOpacity>
      </Text>
    </View>
    </View>
  </View>
  </ScrollView>
)};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoSessao: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "6%",
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
    marginTop: "7%",
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
    marginTop: "3%",
  },
  input: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#CBA2CB",
    borderWidth: 0.5,
    borderRadius: 10,
    width: "87%",
    height: 50,
    marginLeft: "6%",
  },
  backgroundImage: {
    backgroundColor: "#C8A2C8",
    width: "14%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    padding: 0,
    marginRight: "3%",
  },
  icone: {
    width: "40%",
    height: "40%",
  },
  textInput: {
    flex: 1,
    padding: 10,
  },
  textInputTop: {
    fontSize: 20,
    marginLeft: "6.5%",
    marginBottom: "1%",
    fontWeight: "100",
    marginTop: "5%",
  },
  olho: {
    marginRight: "8%",
  },
  buttonLogin: {
    backgroundColor: '#C8A2C8',
    width: "85%",
    textAlign: "center",
    alignItems: 'center',
    height: 50, // Defina uma altura fixa
    justifyContent: "center",
    marginTop: 40,
    borderRadius: 25,
  },
  textoBtn: {
    fontSize: 20,
    color: '#fff', // Adicione cor ao texto
  },
  linha: {
    height: 1, 
    width: '30%',
    backgroundColor: 'gray', 
    marginVertical: 10, 
  },
  linhaGoogle:{
    display: 'flex',
    flexDirection: 'row',
    marginTop: 30,
    alignContent: 'center'
  },
  textLinhaGoogle:{
    marginLeft: 5,
    marginRight: 5,
    marginTop: 2.5,
    color: 'gray'
  },
  buttonLoginGoogle:{
    display: 'flex',
    flexDirection: 'row',
    gap: '20',
    backgroundColor: '#D9D9D9',
    width: "85%",
    textAlign: "center",
    alignItems: 'center',
    height: 50, 
    justifyContent: "center",
    marginTop: 30,
    borderRadius: 25,
  },
  textoBtnGoogle:{
    fontSize: 20,
    color: 'black',
    fontWeight: '300'
  }, 
  textSemConta:{
    fontSize: 16,
    fontWeight: '200',
    marginTop: '10%'
  },
  textBold:{
    fontWeight: '600',
  },
  botoes:{
    alignItems: 'center'
  }
});

export default Page3;
