import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import AntDesign from '@expo/vector-icons/AntDesign';


export default function _layout() {
  return (
    <Tabs screenOptions={{headerShown:false}}>
        <Tabs.Screen 
        options={{
            tabBarLabel:"My Trip",
            tabBarIcon:({color})=><FontAwesome6 name="location-dot" size={24} color="black" />
        }}
        name='mytrip'/>
        <Tabs.Screen options={{
            tabBarLabel:"Discover",
            tabBarIcon:({color})=><AntDesign name="earth" size={24} color="black" />
        }} name='discover'/>
        <Tabs.Screen options={{
            tabBarLabel:"Profile",
            tabBarIcon:({color})=><AntDesign name="user" size={24} color="black" />
        }} name='profile'/>
    </Tabs>
  )
}