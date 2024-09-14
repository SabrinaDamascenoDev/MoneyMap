import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../FirebaseConfig/FirebaseConfig';

const Page2 = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); 

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.navigate("Home");
      }
    });

    return unsubscribe;
  }, [navigation]);

  const handleLogin = useCallback(() => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        navigation.navigate("Home");
      })
      .catch(error => {
        alert(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [email, password, navigation]);

  return (
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
                value={password}
                onChangeText={text => setPassword(text)}
                style={styles.textInput}
                secureTextEntry
              />
              <Image style={styles.olhoImage} source={require("../../Imagens/olho.png")} />
            </View>
            <TouchableOpacity>
              <Text style={styles.senhaEsquecida}>Esqueceu a senha?</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={handleLogin}
          disabled={loading}
        >
          <Text style={styles.textoBtn}>{loading ? 'Carregando...' : 'Entrar'}</Text>
        </TouchableOpacity>

        <View style={styles.linhaGoogle}>
          <View style={styles.linha} />
          <Text style={styles.textLinhaGoogle}>ou entre com</Text>
          <View style={styles.linha} />
        </View>
        <TouchableOpacity
          style={styles.buttonLoginGoogle}
          onPress={() => navigation.navigate('Login')}
        >
          <Image source={require("../../Imagens/google.png")} />
          <Text style={styles.textoBtnGoogle}>Entrar com o Google</Text>
        </TouchableOpacity>

        <Text style={styles.textSemConta}>
          Ainda não possui uma conta?{' '}
          <TouchableOpacity onPress={() => navigation.navigate('Registre-se')}>
            <Text style={styles.textBold}>Crie uma conta</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
};

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
    width: 20,
    height: 20
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
    height: 1, // Espessura da linha
    width: '30%', // Largura da linha (ajuste conforme necessário)
    backgroundColor: 'gray', // Cor da linha
    marginVertical: 10, // Margem acima e abaixo da linha
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
    height: 50, // Defina uma altura fixa
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

export default Page2;
