import { View, Text } from 'react-native'
import React, { useEffect, useState, useContext } from 'react'
import { useNavigation } from 'expo-router'
import { FlatList } from 'react-native';
import { SelectTravelerList } from '../../constants/Options.js';
import OptionCard from '../../components/CreateTrip/OptionCard.jsx';
import { TouchableOpacity } from 'react-native';
import { CreateTripContext } from "../../context/CreateTripContext.jsx"
import { router } from "expo-router";

export default function SelectTraveler() {

    const [tripData, setTripData] = useContext(CreateTripContext);
    const [selectedTitle,setSelectedTitle] = useState();

    useEffect(()=>{
        setTripData({...tripData,traveler:selectedTitle})
    },[selectedTitle])
 
    const navigation = useNavigation();
    useEffect(()=>{
        navigation.setOptions({
            headerShown:true,
            headerTrasperent:true,
            headerTitle:"",
            
        })
    });

  return (
    <View style={{
        padding:20,
        backgroundColor:"white",
        height:"100%",
        borderTopColor:"white",
    }}>
      <Text style={{
        fontFamily:"outfit-bold",
        fontSize:35,

      }}>Who is Travelling</Text>
      <View style>
        <Text style={{
            fontSize:23,
            fontFamily:"outfit-medium",
            marginTop:15
        }}>
            Choose your travelles
        </Text>
        <FlatList
        data={SelectTravelerList}
        renderItem={({item,index})=>{
            return(
            <TouchableOpacity style={{
                marginVertical:10
            }}
            onPress={()=>setSelectedTitle(item)}>
                <OptionCard option={item} selectedOption={selectedTitle}/>
            </TouchableOpacity>)
        }}
        />

        
      </View>
      <TouchableOpacity onPress={()=>router.push("/create-trip/SelectDates")}
      style={{
        backgroundColor:"black",
        padding:15,
        marginTop:20,
        borderRadius:15
      }}>
        <Text style={{
            color:"white",
            textAlign:"center",
            fontFamily:"outfit",
            fontSize:20
        }}>
            Continue
        </Text>
      </TouchableOpacity>
    </View>
  )
}