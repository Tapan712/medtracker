import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Colors from "../constant/Colors";
import { Ionicons } from "@expo/vector-icons";
import { timeConverter } from "../utils/DateUtil";

export default function MedCard({ medicine }) {
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
      <View style={styles.reminderContainer}>
        <Ionicons name='timer-outline' size={24} color="black"/>
        <Text style={{font:20,fontWeight:'bold'}}>{timeConverter(medicine?.item?.startTime)}</Text>
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
  }
});
