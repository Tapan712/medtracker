import { FlatList, View  } from 'react-native'
import React, { useContext } from 'react'
import ReportHeader from '../../components/report-med/ReportHeader'
import { doseStatus } from '../../constant/MockData'
import ReportBody from '../../components/report-med/ReportBody'
import { MedListContext, SelectMedContext } from '../../components/AppContext'

export default function MedicationReport() {
   const {selectedMed,setSelectedMed} = useContext(SelectMedContext);
   const {medList, setMedList} = useContext(MedListContext);
  return (
    <FlatList
    data={[]}
    ListHeaderComponent={
    <View style={{
        padding:25,
        height:'100%'
    }}>
      <ReportHeader medicine={medList[selectedMed-1]}/>
      <FlatList
      data={doseStatus}
      renderItem={(item,index)=>(
        <ReportBody dose={item?.item}/>
      )}
      /> 
    </View>
    }
    />
  )
}