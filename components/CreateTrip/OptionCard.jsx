import { View, Text } from 'react-native'
import React from 'react'

export default function OptionCard({option,selectedOption}) {
  return (
    <View style={[{
        padiing:15,
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        backgroundColor:"#f9dad4",
        borderRadius:20
    },selectedOption?.id==option?.id&&{borderWidth:3}]}>
      <View style={{
        padding: 25
      }}>
        <Text style={{
            fontSize:20,
            fontFamily:"outfit-bold",
        }}>{option?.title}</Text>
        <Text style={{
            fontSize:17,
            fontFamily:"outfit-medium",
            color:"grey",

        }}>
            {option.desc}
        </Text>

        
      </View>
      <Text style={{padding:20,fontSize:40}}>
           {option.icon}
        </Text>

      
    </View>
  )
}