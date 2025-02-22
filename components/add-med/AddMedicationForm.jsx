import { View, Text, StyleSheet, TextInput, FlatList } from "react-native";
import React, { useState } from "react";
import ServiceConstant from "../../constant/ServiceConstant";
import { Ionicons, Octicons } from "@expo/vector-icons";
import Colors from "../../constant/Colors";
import { type, whenTotake } from "../../constant/Options";
import { TouchableOpacity } from "react-native";

export default function AddMedicationForm() {
  const [formData, setFormData] = useState();
  const onHandleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    console.log(formData);
  };
  return (
    <View
      style={{
        padding: 25,
      }}
    >
      {/* Form Header */}
      <Text style={styles.header}>{ServiceConstant.addNewMedHeading}</Text>
      {/* Medicine Name */}
      <View style={styles.inputGroup}>
        <Ionicons
          style={styles.icon}
          name="medkit-outline"
          size={24}
          color="black"
        />
        <TextInput
          style={styles.textInput}
          placeholder={ServiceConstant.lblMedName}
          onChangeText={(value) => onHandleInputChange("name", value)}
        />
      </View>
      {/* Meditine Type */}
      <FlatList
        data={type}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          marginTop: 15,
        }}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={[
              styles.inputGroup,
              { marginRight: 10, marginBottom: 10 },
              {
                backgroundColor:
                  item == formData?.type ? Colors.PRIMARY : "white",
              },
            ]}
            onPress={() => onHandleInputChange("type", item)}
          >
            <Text
              style={[
                styles.typeOption,
                {
                  color: item == formData?.type ? "white" : "black",
                },
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        )}
      />
      {/* Dose */}
      <View style={styles.inputGroup}>
        <Ionicons style={styles.icon} name="eyedrop" size={24} color="black" />
        <TextInput
          style={styles.textInput}
          placeholder={ServiceConstant.lblDose}
          onChangeText={(value) => onHandleInputChange("dose", value)}
        />
      </View>
      {/* When To take option */}
      <FlatList
        data={whenTotake}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          marginTop: 15,
        }}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={[
              styles.inputGroup,
              { marginRight: 10, marginBottom: 10 },
              {
                backgroundColor:
                  item == formData?.whenTotake ? Colors.PRIMARY : "white",
              },
            ]}
            onPress={() => onHandleInputChange("whenTotake", item)}
          >
            <Text
              style={[
                styles.typeOption,
                { color: item == formData?.whenTotake ? "white" : "black" },
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        )}
      />
      {/* How many times a day */}
      <View style={styles.inputGroup}>
        <Octicons
          style={styles.icon}
          name="number"
          size={24}
          color="black"
        />
        <TextInput
          style={styles.textInput}
          placeholder={ServiceConstant.lblTimesPerDay}
          onChangeText={(value) => onHandleInputChange("timesPerDay", value)}
        />
      </View>

       {/* Course Duration */}
       <View style={styles.inputGroup}>
        <Ionicons
          style={styles.icon}
          name="calendar"
          size={24}
          color="black"
        />
        <TextInput
          style={styles.textInput}
          placeholder={ServiceConstant.lblCourseDuration}
          onChangeText={(value) => onHandleInputChange("courseDuration", value)}
        />
      </View>
      {/* Add Button */}
      <TouchableOpacity style={{
            backgroundColor:'lightslategray',
            padding:15,
            borderRadius:10,
            width:'100%',
            marginTop:30
        }} 
       //add onpress here
        >
            <Text style={{
                textAlign:'center',
                fontSize:16,
                color:'white'
            }}>{ServiceConstant.saveNewMed}</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 25,
    fontWeight: "bold",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.LIGHT_GRAY_BORDER,
    marginTop: 8,
    backgroundColor: "white",
  },
  textInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    backgroundColor: "white",
  },
  icon: {
    color: Colors.PRIMARY,
    borderRightWidth: 1,
    borderColor: Colors.LIGHT_GRAY_BORDER,
    paddingRight: 12,
  },
  typeOption: {
    fontSize: 15,
  },
});
