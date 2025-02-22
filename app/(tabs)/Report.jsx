import { View, FlatList } from 'react-native'
import React from 'react'
import { medListMock } from '../../constant/MockData'
import ReportCard from '../../components/ReportCard'


export default function Report() {
  return (
    <FlatList
    data={[]}
    ListHeaderComponent={
    <View style={{
        padding:25,
        backgroundColor:'white',
        height:'100%'
    }}>
    {/* Medicine List */}
    <FlatList
      data={medListMock}
      renderItem={(item,index)=>(
        <ReportCard medicine={item}/>
      )}
      />    
    </View>
    }/>
  )
}