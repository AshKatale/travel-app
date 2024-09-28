import { View, Text, Touchable } from "react-native";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function StartNewTripCard() {

    const router = useRouter();

  return (
    <View
      style={{
        padding: 20,
        marginTop: 50,
        display: "flex",
        alignItems: "center",
        gap: 25,
      }}
    >
      <Entypo name="location" size={30} color="black" />
      <Text style={{ fontSize: 25, fontFamily: "outfit-medium" }}>
        No Trips Planned yet
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontFamily: "outfit-medium",
          textAlign: "center",
          color: "grey",
        }}
      >
        Looks like it's time to start a new trip. Get started below!
      </Text>
      <TouchableOpacity
      onPress={()=>router.push("/create-trip/SearchPlace")}
        style={{
          padding: 15,
          backgroundColor: "black",
          borderRadius: 20,
          paddingHorizontal: 20,
        }}
      >
        <Text
          style={{ color: "white", fontSize: 20, fontFamily: "outfit-medium" }}
        >
          Start a new trip
        </Text>
      </TouchableOpacity>
    </View>
  );
}
