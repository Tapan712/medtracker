import { Text, View } from 'react-native'
import React from 'react'
import ServiceConstant from '../constant/ServiceConstant'
import { TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router'
import LottieView from 'lottie-react-native'


export default function EmptyState() {
    const router = useRouter();
  return (
    <View style={{
        marginTop:80,
        display:'flex',
        alignItems:'center'
    }}>
        <LottieView source={require('./../assets/animation/noMedAnim.json')} autoPlay loop
        style={{
            
            width:300,
            height:300
        }}/>
        
        <Text style={{
            marginTop:20,
            fontSize:30,
            fontWeight:'bold'
        }}>{ServiceConstant.noMedications}</Text>
        <Text style={{
            fontSize:15,
            color:'gray',
            textAlign:'center'
        }}>{ServiceConstant.zeroMed}</Text>
        <TouchableOpacity style={{
            backgroundColor:'lightslategray',
            padding:15,
            borderRadius:10,
            width:'100%',
            marginTop:30
        }} 
        onPress={()=>router.push('/add-new-med')}
        >
            <Text style={{
                textAlign:'center',
                fontSize:16,
                color:'white'
            }}>{ServiceConstant.addNewMed}</Text>
        </TouchableOpacity>
    </View>
  )
}