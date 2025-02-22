import { FlatList, View  } from 'react-native'
import React from 'react'
import ReportHeader from '../../components/report-med/ReportHeader'
import { doseStatus, medListMock } from '../../constant/MockData'
import ReportBody from '../../components/report-med/ReportBody'

export default function MedicationReport() {
  return (
    <FlatList
    data={[]}
    ListHeaderComponent={
    <View style={{
        padding:25,
        height:'100%'
    }}>
      <ReportHeader medicine={medListMock[0]}/>
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