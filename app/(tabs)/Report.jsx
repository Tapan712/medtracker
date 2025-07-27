import { View, FlatList } from 'react-native'
import React, { useContext } from 'react'
import ReportCard from '../../components/ReportCard'
import { MedListContext } from '../../components/AppContext';


export default function Report() {
  const {medList, setMedList} = useContext(MedListContext);
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
      data={medList}
      renderItem={(item,index)=>(
        <ReportCard medicine={item}/>
      )}
      />    
    </View>
    }/>
  )
}