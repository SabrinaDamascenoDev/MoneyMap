import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard  } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../FirebaseConfig/FirebaseConfig';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Page2 = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [showPassword , setShowPassword] = useState(false);

  const handleShowPass = () => {
    setShowPassword(!showPassword);
  }
      const handleLogin = () => {
      signInWithEmailAndPassword(auth, email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        navigation.navigate("Home");
      })
      .catch(error => {
        if(error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found' || error.code === 'auth/invalid-credential'){
          alert("Senha ou email inválidos!!");
        }else{
          alert(error.message);
        }});
  }

  return(

  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
  <KeyboardAvoidingView style={styles.container} behavior="padding"> 
  <View style={styles.container}>  

    <View style={styles.logoVoltar}>
      <Text style={styles.logo}>LOGO</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Inicial')}> 
      <Image
        source={require("../../Imagens/paraLado.png")}
        style={styles.image}
      />
      </TouchableOpacity>
    </View>
    <View style={styles.containerBaixo}>
      <Text style={styles.titleLogin}>Login</Text>
      <Text style={styles.descricaoLogin}>Bem-vindo(a) de volta ao MoneyMap.</Text>

      <View style={styles.inputs}>
        <View style={styles.inputEmail}>
            <Text style={styles.textInputTop}>Email</Text>
            <View style={styles.inputStyle}>
            <View style={styles.backgroundEmail}>
                <Image
                style={styles.imagemEmail}
                source={require("../../Imagens/email.png")}
                />
            </View>
            <TextInput
                placeholder='Digite aqui o seu email'
                style={styles.textInput}
                value={email}
                onChangeText={text => setEmail(text)}
            />
           
            </View>
        </View>
        <View style={styles.inputSenha}>
            <Text style={styles.textInputTop}>Senha</Text>
            <View style={styles.inputStyle}>
            <View style={styles.backgroundEmail}>
                <Image
                style={styles.imagemEmail}
                source={require("../../Imagens/senha.png")}
                />
            </View>
            <TextInput
                placeholder='*********'
                type='password'
                value={password}
                onChangeText={text => setPassword(text)}
                style={styles.textInput}
                secureTextEntry = {!showPassword}
            />
            <MaterialCommunityIcons name={showPassword ? 'eye-off' : 'eye'} size={23} style={styles.olhoImage} onPress={handleShowPass}/>
            </View>
            <TouchableOpacity>
                <Text style={styles.senhaEsquecida}>Esqueceu a senha?</Text>
            </TouchableOpacity>
        </View>


      </View> 

      <TouchableOpacity
        style={styles.buttonLogin}
        onPress={handleLogin}
      >
        <Text style={styles.textoBtn}>Entrar</Text>
      </TouchableOpacity>

      <View style={styles.linhaGoogle}>
        <View style={styles.linha} />
        <Text style={styles.textLinhaGoogle}>ou entre com</Text>
        <View style={styles.linha}></View>
      </View>
      <TouchableOpacity
        style={styles.buttonLoginGoogle}
        onPress={() => navigation.navigate('Login')}
      >
        <Image source={require("../../Imagens/google.png")}></Image>
        <Text style={styles.textoBtnGoogle}>Entrar com o Google</Text>
      </TouchableOpacity>
      
      <Text style={styles.textSemConta}>Ainda não possui uma conta? <TouchableOpacity onPress={() => navigation.navigate('Registre-se')}><Text style={styles.textBold}>Crie uma conta</Text></TouchableOpacity></Text>
    </View>
    
  </View>
  </KeyboardAvoidingView>
  </TouchableWithoutFeedback>
)};

export default Page2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoVoltar: {
    marginTop: 30,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 30,
  },
  titleLogin: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  containerBaixo: {
    alignItems: 'center',
    marginTop: 45,
  },
  image: {
    marginRight: 30,
  },
  descricaoLogin: {
    color: 'gray',
  },
  imagemEmail: {
    width: 20,
    height: 20,
  },
  inputStyle: {
    flexDirection: 'row',
    width: 320,
    borderColor: '#CBA2CB',
    borderWidth: 0.5,
    borderRadius: 10, 
    alignItems: 'center',
    height: 50
  },
  backgroundEmail: {
    backgroundColor: '#C8A2C8',
    width: 45,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10, 
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10

  },
  textInput: {
    flex: 1, 
    paddingHorizontal: 10, 
  },

  textInputTop:{
    fontSize: 20,
    marginLeft: 2,
    marginBottom: 5,
    fontWeight: '100'

  },
  inputs:{
    marginTop: 50
  },
  inputEmail:{

  },

  inputSenha:{
    marginTop: 20
  }, 
  olhoImage:{
    marginRight: 20,
  },
  senhaEsquecida:{
    marginTop: 10,
    marginLeft: 2,
    fontWeight: '300'
  },
  buttonLogin: {
    backgroundColor: '#C8A2C8',
    width: "85%",
    textAlign: "center",
    alignItems: 'center',
    height: 50, 
    justifyContent: "center",
    marginTop: 40,
    borderRadius: 25,
  },
  textoBtn: {
    fontSize: 20,
    color: '#fff', 
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
    marginTop: 40,
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
  }
});
