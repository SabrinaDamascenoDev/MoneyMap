import { View, StyleSheet, Text, TouchableHighlight } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const Page6 = () => {
  return (
    <View style={styles.containerMenu}>
      <TouchableOpacity>
        <MaterialCommunityIcons
          name="home-outline"
          style={styles.icon}
          size={32}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <MaterialCommunityIcons
          name="chart-line"
          size={32}
          style={styles.icon}
        />
      </TouchableOpacity>
    
        <View style={styles.estiloPorquinhi}>
          <MaterialCommunityIcons name="piggy-bank-outline" size={32} />
        </View>
     
      <TouchableOpacity>
        <MaterialCommunityIcons
          name="file-document-outline"
          size={32}
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <MaterialCommunityIcons
          name="account-outline"
          size={32}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  containerMenu: {
    position: "absolute",
    bottom: 0,
    left: "0",
    width: "100%",
    backgroundColor: "white",
    height: "10%",
    display: "flex",
    flexDirection: "row",

    justifyContent: "center",
    alignItems: "center",
    paddingLeft: "15%",
    paddingRight: "15%",
  },
  estiloPorquinhi: {
    position: "relative",
    backgroundColor: "#C8A2C8",
    bottom: "12%",
    width: "28%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "100%",
  },
  icon: {
    padding: "7%",
  },
});

export default Page6;
