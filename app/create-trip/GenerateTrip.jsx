import { View, Text, Image } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { CreateTripContext } from "../../context/CreateTripContext.jsx";
import { AI_PROMPT } from "../../constants/Options.js";
import { chatSession } from "../../configs/AiModel.js";
import { doc, setDoc } from "firebase/firestore";
import {auth,db} from "./../../configs/FireBaseConfig.jsx"
import { router } from "expo-router";

export default function GenerateTrip() {
  const [tripData, setTripData] = useContext(CreateTripContext);
  const [loading,setLoading]=useState(false);
  const user=auth.currentUser;

  useEffect(() => {
    GenerateAiTrip();
  }, []);

  const GenerateAiTrip = async () => {
    setLoading(true);
    const FINAL_PROMPT = AI_PROMPT.replace("{location}", tripData?.locationInfo)
      .replace("{totalDay}", tripData?.noOfDays)
      .replace("{totalNight}", tripData?.noOfDays - 1)
      .replace("{traveler}", tripData.traveler.title)
      .replace("{budget}", tripData.budget.title)
      .replace("{totalDay}", tripData?.noOfDays)
      .replace("{totalNight}", tripData?.noOfDays - 1);

    // console.log(FINAL_PROMPT);
       
    const result = await chatSession.sendMessage(FINAL_PROMPT);
    // console.log(result.response.text());
    setLoading(false);

   
    const docId = Date.now().toString();
    const tripResp = JSON.parse(result.response.text())
    const result_ = await setDoc(doc(db,"UserTrips",docId),{
      userEmail : user.email,
      tripPlan: tripResp , //AI result
      tripData : JSON.stringify(tripData), // User selection
      docId : docId
    });

    console.log("Done Bro");
  
      router.push("(tabs)/mytrip");
  
  };

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 75,
        backgroundColor: "white",
        height: "100%",
      }}
    >
      <Text
        style={{
          fontFamily: "outfit-bold",
          textAlign: "center",
          fontSize: 30,
        }}
      >
        Please Wait...
      </Text>
      <Text
        style={{
          fontFamily: "outfit-medium",
          textAlign: "center",
          fontSize: 20,
          marginTop: 40,
        }}
      >
        We are working to generate your dream trip
      </Text>
      <Image
        source={require("../../assets/images/load.gif")}
        style={{
          width: "100%",
          height: 240,
          objectFit: "contain",
          marginTop: 30,
        }}
      ></Image>
      <Text
        style={{
          fontFamily: "outfit",
          fontSize: 20,
          textAlign: "center",
          color: "grey",
          marginTop: 20,
        }}
      >
        Do not Go Back
      </Text>
    </View>
  );
}
