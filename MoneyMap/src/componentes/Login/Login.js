import React from 'react';
import { View, Text, StyleSheet , Image} from 'react-native';


const Page2 = () => (
  <View style={styles.container}>  
    <View style={styles.logoVoltar}>
        <Text style={styles.logo}>LOGO</Text>
        <Image
        source={require("../../Imagens/paraLado.png")} 
        style={styles.image}
      />
    </View>
    <View style={styles.containerBaixo}>
        <Text style={styles.titleLogin}>Login</Text>
        <Text style={styles.descricaoLogin}>Bem-vindo(a) de volta ao MoneyMap.</Text>
    </View>
  </View>
);

export default Page2;

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    logoVoltar:{
        marginTop: 30,
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
    logo:{
        fontSize: 25, 
        fontWeight: 'bold',
        marginLeft: 30

    },
    titleLogin:{
        fontSize: 35,
        fontWeight: 'bold',
        marginBottom: 10
    },
    containerBaixo:{
        alignItems: 'center',
        marginTop: 45,
    },
    image:{
        marginRight: 30,
        
    },
    descricaoLogin:{
        color: 'gray',
    }
})