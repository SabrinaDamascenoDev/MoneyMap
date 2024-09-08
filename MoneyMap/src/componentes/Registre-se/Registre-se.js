
import React from "react"
import { View, Text, TouchableOpacity, TextInput, Image, StyleSheet } from 'react-native'
const Page3 = ({navigation}) => (
    <View>
        <View style={styles.logoSessao}>
            <Text style={styles.logo}>LOGO</Text>
            <TouchableOpacity>
                <Image style={styles.imageVoltar} source={require("../../Imagens/paraLado.png")}></Image>
            </TouchableOpacity>
        </View>
        <View>   
            <View style={styles.sessaoRegistrar}>
                <Text style={styles.titleRegis}>Registre-se</Text>
                <Text style={styles.descricaoRegis}>Bem-vindo(a) ao MoneyMap.</Text>
            </View>
            <View>
                
            </View>
        </View> 
    </View>
)

export default Page3;

const styles = StyleSheet.create({
     logoSessao:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        alignContent: 'center',
        alignItems: 'center',
        marginTop: '9%'
    },
    logo:{
        fontSize: 25,
        fontWeight: '900',
        marginLeft: '9%',

    },
    imageVoltar:{
        marginRight: '9%'
    },
    sessaoRegistrar:{
        marginTop: '12%', 
        alignItems: 'center'
    },
    titleRegis:{
        fontSize: 35,
        fontWeight: 'bold',
        marginBottom: '2%'
    },
    descricaoRegis:{
        color:"gray"
    },


} 
)