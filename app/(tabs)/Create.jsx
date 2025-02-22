import { View, Text } from 'react-native'
import React from 'react'
import { useFocusEffect, useRouter } from 'expo-router'

export default function Create() {
  const router = useRouter();
  useFocusEffect(()=>{
    router.push('/add-new-med')
  })
  return (
    <View style={{
      backgroundColor:'white',
      height:'100%'
  }}>
    
    </View>
  )
}