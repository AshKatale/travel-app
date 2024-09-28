import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
// import Fontisto from "@expo/vector-icons/Fontisto";

export default function Login() {
  const router = useRouter();
  return (
    <View>
      <Image
        style={{ width: "100%", height: 520 }}
        source={require("../assets/images/login.jpg")}
      />
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 30,
            fontFamily: "outfit-bold",
            textAlign: "center",
          }}
        >
          AI Travel Planner
        </Text>
        <View style={{ margin: 20 }}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: "outfit",
              color: "grey",
              textAlign: "center",
            }}
          >
            Let AI curate your perfect getaway. Explore personalized
            destinations, itineraries, and experiences tailored to your style.
            Start planning your dream trip effortlessly!
          </Text>
          
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("auth/sign-in")}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontFamily: "outfit-bold",
              fontSize: 18,
            }}
          >
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginTop: -25,
    height: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  button: {
    backgroundColor: "black",
    padding: 15,
    borderRadius: 99,
    marginTop: "8%",
  },
});
