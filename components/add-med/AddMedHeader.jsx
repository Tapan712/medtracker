import { View, Image, BackHandler } from 'react-native'
import React, { useEffect } from 'react'
import LottieView from 'lottie-react-native'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'

export default function AddMedHeader() {
  const router = useRouter();
  useEffect(()=>{
    BackHandler.addEventListener('hardwareBackPress',()=>{
      router.push('/')
      return true
    })
  })
  return (
    <View>
      <LottieView source={require('./../../assets/animation/animateMed.json')} autoPlay loop
      style={{
        height:250,
        width:'100%',
        backgroundColor:'#ffeae0'
      }}/>
      <TouchableOpacity style={{
        position:'absolute',
        padding:25
      }}
      onPress={()=>router.push('/')}>
        <Ionicons name='arrow-back' size={24} color="black"/>
      </TouchableOpacity>
    </View>
  )
}