import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Dashboard from '../../components/Dashboard'

export default function HomeScreen() {
  return (
    <FlatList
    data={[]}
    ListHeaderComponent={
    <View style={{
        padding:25,
        backgroundColor:'white',
        height:'100%'
    }}>
      <Dashboard/>
    </View>
    }
    />
  )
}