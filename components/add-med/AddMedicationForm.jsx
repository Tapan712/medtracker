import { View, Text, StyleSheet, TextInput, FlatList } from "react-native";
import React, { useContext,useState } from "react";
import ServiceConstant from "../../constant/ServiceConstant";
import { Ionicons, Octicons } from "@expo/vector-icons";
import Colors from "../../constant/Colors";
import { type, whenTotake } from "../../constant/Options";
import { TouchableOpacity } from "react-native";
import { MedListContext, DoseListContext, DbContext} from "../AppContext";
import { fetchDoseStatusList } from "../../utils/MedUtils";
import moment from "moment/moment";

export default function AddMedicationForm() {
  const {medList, setMedList} = useContext(MedListContext);
  const {doseList, setDoseList} = useContext(DoseListContext);
  const [formData, setFormData] = useState();
  const {dbObj, setDbObj} = useContext(DbContext);
  const onHandleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

  };

  const saveMedication = async (formData) => {
    if (!formData) {
      alert(ServiceConstant.fillAllFields);
      return;
    }

    const startDate = moment().format("MM-DD-YYYY");
    const startTime = moment().format("HH:mm");
    const endDate = moment().add(formData?.courseDuration, "days").format("MM-DD-YYYY");
    const endTime = moment().add(formData?.timesPerDay * formData?.courseDuration * Math.floor(24/formData?.courseDuration) , "hours").format("HH:mm");
    
    const medQuery = "INSERT INTO med (name,type,dose,timesPerDay,whenTotake,startDate,startTime,endDate,endTime,courseDuration) VALUES ('"
          +formData?.name+"','"
          +formData?.type+"','"
          +formData?.dose+"','"
          +formData?.timesPerDay+"','"
          +formData?.whenTotake+"','"
          +startDate+"','" // Use current date as start date
          +startTime+"','" // Use current time as start time
          +endDate+"','" //End date is current date + course duration
          +endTime+"','"//End time is current time + total hours based on course duration and times per day
          +formData?.courseDuration+"');";
          
    
    try {
      await dbObj.execAsync(medQuery);
      const lastMedId = await dbObj.getAllAsync(`SELECT MAX(mId) as lastId FROM med;`);
      const doseList = fetchDoseStatusList(formData);
      doseList.forEach((element) => {
        const doseQuery = "INSERT INTO doseStatus (dSlNo, date,time,status,mId) VALUES ('"
    +element?.dSlNo+"','"
    +element?.date+"','" 
    +element?.time+"','" 
    +element?.status+"',"
    +lastMedId[0]?.lastId+");";
        dbObj.execAsync(doseQuery);
      });
      setMedList((prev) => [...prev, {...formData, mId: lastMedId[0]?.lastId, startDate: startDate,startTime:startTime,endDate:endDate,endTime:endTime}]);
      setDoseList((prev) => [...prev, ...doseList.map((item) => ({...item, mId: lastMedId[0]?.lastId}))]);
      console.log(medList);
      console.log(doseList);
      alert(ServiceConstant.medAddedSuccess);
    } catch (error) {
      console.error("Error saving medication:", error);
      alert(ServiceConstant.medAddError);
    }
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
       onPress={() => saveMedication(formData)}
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
