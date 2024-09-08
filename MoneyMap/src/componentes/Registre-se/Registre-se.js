
import React from "react"
import { View, Text, TouchableOpacity, TextInput, Image, StyleSheet } from 'react-native'
const Page3 = ({navigation}) => (
    <View>
        <View style={styles.logoSessao}>
            <Text>LOGO</Text>
            <Image source={require("../../Imagens/paraLado.png")}></Image>
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
        alignItems: 'center'
    }
} 
)