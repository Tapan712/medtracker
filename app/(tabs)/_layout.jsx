import { FontAwesome, FontAwesome6 } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import React from 'react'


export default function TabLayout() {
  return (
    <Tabs screenOptions={{
        headerShown:false
    }}>
        <Tabs.Screen name='index' options={{
            title:'Home',
            tabBarIcon:({color,size})=>(
                <FontAwesome name='home' size={24} color={color}/>
            )
        }}/>
        <Tabs.Screen name='Create'options={{
            tabBarIcon:({color,size})=>(
                <FontAwesome name="calendar-plus-o" size={24} color={color} />
            )
        }}/>
        <Tabs.Screen name='Report' options={{
            tabBarIcon:({color,size})=>(
                <FontAwesome6 name="list-check" size={24} color={color} />
            )
        }}/>
    </Tabs>
  )
}
