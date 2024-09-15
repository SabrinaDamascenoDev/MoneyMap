
import { View, StyleSheet, Text } from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Page6 = () => {
    return(
        <View style={styles.containerMenu}>
            <MaterialCommunityIcons name='home-outline' style={styles.icon} size={32}/>
            <MaterialCommunityIcons name='chart-line' size={32} style={styles.icon}/>
            <View style={styles.estiloPorquinhi}>
            <MaterialCommunityIcons name='piggy-bank-outline' size={32}/>
            </View>
            <MaterialCommunityIcons name='file-document-outline' size={32} style={styles.icon}/>
            <MaterialCommunityIcons name='account-outline' size={32} style={styles.icon}/>
        </View>
    )
}

const styles = StyleSheet.create({
    containerMenu:{
        position: 'absolute',
        bottom: 0,
        left: '0',
        width: '100%',
        backgroundColor: 'white',
        height: '10%',
        display: 'flex',
        flexDirection: 'row',

        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: '15%',
        paddingRight: '15%'

    },
    estiloPorquinhi:{
        position: 'relative',
        backgroundColor: '#C8A2C8',
        bottom: '12%',
        width: '28%',
        height:'100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '100%'
    },
    icon:{
        padding: '7%'
    }
})

export default Page6;