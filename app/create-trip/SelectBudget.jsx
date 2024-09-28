import { View, Text, ToastAndroid } from 'react-native'
import React, { useEffect,useState,useContext } from 'react'
import { useNavigation } from 'expo-router'
import { SelectBudgetList } from '../../constants/Options';
import OptionCard from '../../components/CreateTrip/OptionCard.jsx';
import { TouchableOpacity } from 'react-native';
import { CreateTripContext } from "../../context/CreateTripContext.jsx"
import { FlatList } from 'react-native';
import { router } from "expo-router";

export default function SelectBudget() {

    const navigation = useNavigation();
    const [tripData, setTripData] = useContext(CreateTripContext);
    const [selectedBudget,setSelectedBudget] = useState();

    const onBudgetSelect = ()=>{
        if(!selectedBudget)
        {
            ToastAndroid.show("Please choose budget",ToastAndroid.LONG)
            return;
        }
        router.push("/create-trip/ReviewTrip");
    }

    useEffect(()=>{
      selectedBudget&&setTripData({...tripData,budget:selectedBudget})
  },[selectedBudget])

    useEffect(()=>{
        navigation.setOptions({
            headerShown:true,
            headerTransparent:true,
            headerTitle:"",
        })
    },[])

  return (
    <View style={{padding:25, paddingTop:75}}>
      <Text style={{
        fontFamily:"outfit-bold",
        fontSize:35,
        marginTop:15
      }}>Budget</Text>
      <View>
        <Text style={{
          fontFamily:"outfit-bold",
          fontSize: 20,
          marginTop:20
        }}>Choose spending habbit for your trip</Text>
        <FlatList
        data={SelectBudgetList}
        renderItem={({item,index})=>{
            return(
            <TouchableOpacity style={{
                marginVertical:10
            }}
            onPress={()=>setSelectedBudget(item)}>
                <OptionCard option={item} selectedOption={selectedBudget}/>
            </TouchableOpacity>)
        }}
        />
      </View>
      <TouchableOpacity style={{
        backgroundColor:"black",
        padding:15,
        borderRadius:20,
        marginTop:25
      }}
      onPress={onBudgetSelect}>
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