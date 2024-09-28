import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

export default function FlightInfo({ flightData }) {
  if (!flightData) return null;

  return (
    <View style={{ marginTop: 20, borderRadius:15,padding :10,borderColor:'#dfdfe6', borderWidth:1 }}>
      <View style={{display:'flex',flexDirection:'row', justifyContent:'space-between',alignItems:'center'}}>
      <Text style={{ fontFamily: "outfit-bold", fontSize: 20 }}>
          ✈️Flights
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: "black",
            padding: 5,
            width: 100,
            borderRadius: 15,
          }}
        >
          <Text
            style={{
              color: "white",
              fontFamily: "outfit",
              textAlign: "center",
            }}
          >
            Book Here
          </Text>
        </TouchableOpacity>
      </View>
  
       
        <Text style={{ fontFamily: "outfit", fontSize: 18, marginTop:10 }}>
          Airline : {flightData.airline}
        </Text>
        <Text style={{ fontFamily: "outfit", fontSize: 18 }}>
          Price : {flightData.flightPrice}
        </Text>
    </View>
  );
}
