import { View, Text, Image, StyleSheet } from "react-native";
import React, { useContext } from "react";
import Colors from "../constant/Colors";
import { FontAwesome, MaterialIcons} from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { SelectMedContext } from "./AppContext";

export default function ReportCard({ medicine }) {
  const {selectedMed,setSelectedMed} = useContext(SelectMedContext);
  const router = useRouter();
  let nm = medicine?.item?.type;
  const imgs =
    nm == "Tablet"
      ? require("./../assets/images/type-icons/Tablet.png")
      : nm == "Syrup"
      ? require("./../assets/images/type-icons/Syrup.png")
      : nm == "Drop"
      ? require("./../assets/images/type-icons/Drop.png")
      : nm == "Injection"
      ? require("./../assets/images/type-icons/Injection.png")
      : nm == "Inhaler"
      ? require("./../assets/images/type-icons/Inhaler.png")
      : nm == "Nabulization"
      ? require("./../assets/images/type-icons/Nabulization.png")
      : nm == "Powder"
      ? require("./../assets/images/type-icons/Powder.png")
      : nm == "HomeoGlobules"
      ? require("./../assets/images/type-icons/HomeoGlobules.png")
      : require("./../assets/images/type-icons/DefaultMed.png");
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <View style={styles.imageContainer}>
          <Image
            source={imgs}
            style={{
              width: 40,
              height: 40,
            }}
          />
        </View>
        <View>
          <Text style={{font:25,fontWeight:'bold'}}>{medicine?.item?.name}</Text>
          <Text>{medicine?.item?.whenTotake}</Text>
          <Text style={{
            color:'white'
          }}>
            {medicine?.item?.dose}
            &nbsp;{medicine?.item?.type}
          </Text>
        </View>
      </View>
      <TouchableOpacity
      onPress={()=>{
        setSelectedMed(medicine?.item?.mId);
        router.push('/med-report')
      }}
      >
      <View style={styles.reminderContainer}>
        <MaterialIcons name="file-open" size={24} color={Colors.PRIMARY} />
        <Text style={{font:20,fontWeight:'bold'}}>Open</Text>
      </View>
      </TouchableOpacity>
      {/* Status badge container icons(check-circle{green},times-circle{red} */}
      <View style={styles.badgeContainer}>
        <FontAwesome name="check-circle" size={24} color={Colors.BADGE_GREEN} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:10,
    backgroundColor:Colors.BANNER_BG,
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
  badgeContainer:{
    position:'absolute',
    top:5,
    padding:8
  }
});
