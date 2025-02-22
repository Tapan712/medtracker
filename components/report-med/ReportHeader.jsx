import { View, Text, Image, StyleSheet } from "react-native";
import { MaterialIcons} from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function ReportHeader({ medicine }) {
  const router = useRouter();
  let nm = medicine?.type;
  const imgs =
    nm == "Tablet"
      ? require("./../../assets/images/type-icons/Tablet.png")
      : nm == "Syrup"
      ? require("./../../assets/images/type-icons/Syrup.png")
      : nm == "Drop"
      ? require("./../../assets/images/type-icons/Drop.png")
      : nm == "Injection"
      ? require("./../../assets/images/type-icons/Injection.png")
      : nm == "Inhaler"
      ? require("./../../assets/images/type-icons/Inhaler.png")
      : nm == "Nabulization"
      ? require("./../../assets/images/type-icons/Nabulization.png")
      : nm == "Powder"
      ? require("./../../assets/images/type-icons/Powder.png")
      : nm == "HomeoGlobules"
      ? require("./../../assets/images/type-icons/HomeoGlobules.png")
      : require("./../../assets/images/type-icons/DefaultMed.png");
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <View style={styles.imageContainer}>
          <Image
            source={imgs}
            style={{
              width: 50,
              height: 50,
            }}
          />
        </View>
        <View>
          <Text style={{fontSize:22,fontWeight:'bold'}}>{medicine?.name}</Text>
          <Text style={styles.subtext}>{medicine?.whenTotake}</Text>
          <Text style={styles.subtext}>
            {medicine?.dose}
            &nbsp;{medicine?.type}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:10,
    backgroundColor:'white',
    marginTop:10,
    borderRadius:15,
    flexDirection:'row',
    justifyContent:'space-between',
    width:'100%',
    alignItems:'center'
  },
  imageContainer: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 15,
    marginRight:15
  },
  subcontainer: {
    flexDirection: "row",
    alignItems:'center'
  },
  reminderContainer:{
    padding:15,
    backgroundColor:'white',
    borderRadius:15,
    alignItems:'center'
  },
  subtext:{
    fontSize:16
  }
});
