import { View, Text, Image } from "react-native";
import React from "react";

export default function PlannedTrip({ details }) {
  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontSize: 20, fontFamily: "outfit-bold" }}>
        ⛺PlannedTrip
      </Text>
      {details.map((item, index) => (
        <View key={index} style={{padding:10, backgroundColor:"#f2e6e6", borderRadius:15, marginTop:20}}>
          <Image
            style={{
              height: 120,
              width: "100%",
              borderRadius: 20,
              padding: 10,
            }}
            source={require("../../assets/images/placeHolder.jpg")}
          />
          <View style={{marginTop:7}}>
            <Text style={{fontFamily:'outfit-medium', fontSize:18}}>Day {item.day} : {item.time}</Text>
            <Text style={{fontFamily:'outfit-bold', fontSize:21}}>{item.activity}</Text>
            <Text style={{fontFamily:'outfit', fontSize:16, color:'grey'}}>{item.description}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}
