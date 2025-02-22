import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { timeConverter } from '../../utils/DateUtil';

export default function ReportBody({dose}) {
    const st = dose?.status;
    const icon = st == null ? "alert-circle":st == "y" ?"check-circle":"x-circle"
    const clr = st == null ? 'orange':st == "y" ?'green':'red'
  return (
    <View style={styles.container}>
    <View style={styles.subcontainer}>
      <View style={styles.imageContainer}>
         <Feather name={icon} size={24} color={clr} />
      </View>
      <View>
        <Text style={styles.subText}>{dose?.date}&emsp;{timeConverter(dose?.time)}</Text>
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
subText:{
  fontSize:16
}
});
