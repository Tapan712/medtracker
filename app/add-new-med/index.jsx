import { FlatList, View} from 'react-native'
import React from 'react'
import AddMedHeader from '../../components/add-med/AddMedHeader'
import AddMedicationForm from '../../components/add-med/AddMedicationForm'

export default function AddMedicine() {
  return (
    <FlatList
    data={[]}
    ListHeaderComponent={
    <View style={{
        height:'100%'
    }}>
      <AddMedHeader/>
      <AddMedicationForm/>
    </View>
    }/>
  )
}