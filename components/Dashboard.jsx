import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Colors from "../constant/Colors";
import { TouchableOpacity } from "react-native";
import { dateRange } from "../utils/DateUtil";
import moment from "moment";
import MedCard from "./MedCard";
import { MedListContext } from "./AppContext";
import{medListMock} from "../constant/MockData"
import { filterMedByDate } from "../utils/MedUtils";
import EmptyState from "./EmptyState"

export default function Dashboard() {
  const {medList, setMedList} = useContext(MedListContext);
  const[filteredMeds,setFilteredMeds] = useState([]);
  const [dates, setDates] = useState();
  const [selectedDates, setSelectedDates] = useState(
    moment().format("MM/DD/YYYY")
  );
  useEffect(() => {
    dateRangeList();
    setMedList(medListMock);
    
  }, []);

  useEffect(()=>{
    fetchMeds();
  },[selectedDates])

  const dateRangeList = () => {
    setDates(dateRange());
  };
  const fetchMeds = () =>{
    filterMedByDate(medListMock,selectedDates);
    setFilteredMeds(filterMedByDate(medListMock,selectedDates));
  };
  
  return (
    <View>
        {/* Header image */}
      <Image
        source={require("./../assets/images/eatingMed.png")}
        style={{
          height: 260,
          width: "100%",
          backgroundColor: "#e7e4cc",
          borderRadius: 8,
        }}
      />
      {/* Date selecter list */}
      <View>
      <FlatList
        data={dates}
        horizontal
        style={{ marginTop: 15 }}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={[
              styles.datelist,
              {
                backgroundColor:
                  item.formatedDate == selectedDates
                    ? Colors.DARK_GRAY
                    : Colors.LIGHT_GRAY_BORDER,
              },
            ]}
            onPress={() => setSelectedDates(item.formatedDate)}
          >
            <Text
              style={[
                styles.day,
                {
                  color: item.formatedDate == selectedDates ? "white" : "black",
                },
              ]}
            >
              {item.day}
            </Text>
            <Text
              style={[
                styles.date,
                {
                  color: item.formatedDate == selectedDates ? "white" : "black",
                },
              ]}
            >
              {item.date}
            </Text>
          </TouchableOpacity>
        )}
      />
      </View>
      {/* Medicine List */}
      {filteredMeds!=null ? <FlatList
      data={filteredMeds}
      renderItem={(item,index)=>(
        <MedCard medicine={item}/>
      )}
      />: <EmptyState/>}
    </View>
  );
}

const styles = StyleSheet.create({
  datelist: {
    padding: 10,
    backgroundColor: Colors.LIGHT_GRAY_BORDER,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 15,
    marginLeft: 8,
    alignItems: "center",
  },
  day: {
    fontSize: 20,
    textAlign: "center",
  },
  date: {
    fontSize: 26,
    fontWeight: "bold",
  }
});

