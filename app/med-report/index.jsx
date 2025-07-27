import { FlatList, View  } from 'react-native'
import React, { useContext, useEffect } from 'react'
import ReportHeader from '../../components/report-med/ReportHeader'
import ReportBody from '../../components/report-med/ReportBody'
import { DoseListContext,MedListContext, SelectMedContext } from '../../components/AppContext'
import { use } from 'react'
import { filterAndShortDose } from '../../utils/MedUtils'

export default function MedicationReport() {
   const {selectedMed,setSelectedMed} = useContext(SelectMedContext);
   const {medList, setMedList} = useContext(MedListContext);
   const {doseList, setDoseList} = useContext(DoseListContext);

   useEffect(() => {
    console.log("medList:", medList);
    console.log("doseList:", doseList);
   },[]);

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
      data={filterAndShortDose(medList[selectedMed-1], doseList)}
      renderItem={(item,index)=>(
        <ReportBody dose={item?.item}/>
      )}
      /> 
    </View>
    }
    />
  )
}