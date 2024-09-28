import { View, Text, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import StartNewTripCard from "../../components/MyTrips/StartNewTripCard";
import { collection, getDocs, query, where } from "firebase/firestore";
import { auth, db } from "../../configs/FireBaseConfig";
import UserTripList from "../../components/MyTrips/UserTripList";
import { ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function MyTrip() {

  const [userTrips, setUserTrips] = useState([]);
  const [loading,setLoading] = useState(false);

  useEffect(()=>{
    user&&GetMyTrip();
  },[user])
   
  const user=auth.currentUser;
  const GetMyTrip = async () =>{
    setLoading(true);
    setUserTrips([]);
    const  q = query(collection(db,'UserTrips'),where('userEmail','==',user?.email))
    const querySnapshot= await getDocs(q);

    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      setUserTrips(prev=>[...prev,doc.data()])
    });
    setLoading(false);
  }

  return (
    <ScrollView
      style={{
        padding: 25,
        paddingTop: 55,
        backgroundColor: "white",
        height: "100%",
      }}
    >
      
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ fontSize: 35, fontFamily: "outfit-bold" }}>
          My Trips
        </Text>
        <TouchableOpacity onPress={()=>router.push("/create-trip/SearchPlace")}>
        <AntDesign name="pluscircle" size={45} color="black" />
        </TouchableOpacity>
      </View>
      {loading&&<ActivityIndicator size={'large'} color={"black"}/>}
      {userTrips.length===0 ? <StartNewTripCard/> : <UserTripList userTrips={userTrips}/>}
      <View style={{marginBottom:70}}></View>
    </ScrollView>
  );
}
