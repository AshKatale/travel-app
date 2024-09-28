import { View, Text, ToastAndroid } from 'react-native'
import React, { useEffect, useState,useContext } from 'react'
import { useNavigation } from 'expo-router'
import CalendarPicker from "react-native-calendar-picker";
import { TouchableOpacity } from 'react-native';
import moment from 'moment';
import { CreateTripContext } from "../../context/CreateTripContext.jsx"
import { router, useRouter } from "expo-router";

export default function SelectDates() {

    const router=useRouter();
    const navigation=useNavigation();
    const [startDate,setStartDate]=useState();
    const [endDate,setEndDate] = useState();

    const [tripData, setTripData] = useContext(CreateTripContext);

    const onDateChange = (date,type)=>{
        if(type=='START_DATE')
        {
            setStartDate(moment(date));
        }
        else
        {
            setEndDate(moment(date));
        }
        
    }
    const onDateSelectionContinue = ()=>{
        if(!startDate && !endDate)
        {
            ToastAndroid.show("Please select Start date and End date",ToastAndroid.LONG);
            return;
        }
        if(endDate==null)
        {
          ToastAndroid.show("Please select Start date and End date",ToastAndroid.LONG);
            return;
        }
        const totalDifference = endDate.diff(startDate,"days");
        setTripData({...tripData,startDate : startDate,endDate:endDate,noOfDays:totalDifference+1})
        // console.log(tripData);
        router.push("/create-trip/SelectBudget")
    }    

    useEffect(()=>{
        navigation.setOptions({
            headerShown:true,
            headerTransparent:true,
            headerTitle:""
        })
    },[])

  return (
    <View style={{padding:25,paddingTop:75,backgroundColor:"white",height:"100%"}}>
      <Text style={{
        fontSize:30,
        fontFamily:"outfit-bold",
        marginTop:20
      }}>Travel Dates</Text>
       
      <View style={{marginTop:30}}>
      <CalendarPicker onDateChange={onDateChange} 
      allowRangeSelection={true}
      minDate={new Date()
      }
      selectedRangeStyle={
        {
            backgroundColor:"black"
        }
      }
      selectedDayTextStyle={{
        color:"white"
      }}
      />
      </View>
      <TouchableOpacity style={{
        backgroundColor:"black",
        padding:15,
        borderRadius:20,
        marginTop:25
      }}
      onPress={onDateSelectionContinue}>
        <Text style={{
            color:"white",
            fontFamily:"outfit-medium",
            fontSize:20,
            textAlign:"center"
        }}>Continue</Text>
      </TouchableOpacity>
    </View>
  )
}