import { View, Text } from "react-native";
import React, { useContext, useEffect } from "react";
import { router, useNavigation } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { CreateTripContext } from "../../context/CreateTripContext.jsx";
import moment from "moment";
import { TouchableOpacity } from "react-native";

export default function ReviewTrip() {
  // 📍
  const [tripData, setTripData] = useContext(CreateTripContext);

  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTrasperent: true,
      headerTitle: "",
    });
  });
  return (
    <View style={{ padding: 20, backgroundColor: "white", height: "100%" }}>
      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 35,
          marginTop: 15,
        }}
      >
        Review your trip
      </Text>
      <View>
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 20,
            marginTop: 15,
          }}
        >
          Before generating your trip, please review your selections
        </Text>
        {/* Destination Info */}
        <View
          style={{
            marginTop: 20,
            display: "flex",
            flexDirection: "row",
            gap: 20,
          }}
        >
          {/* <Ionicons name="location-sharp" size={42} color="black" /> */}
          <Text
            style={{
              fontSize: 35,
            }}
          >
            📍
          </Text>
          <View>
            <Text
              style={{
                fontFamily: "outfit",
                fontSize: 20,
                color: "grey",
              }}
            >
              Destination
            </Text>
            <Text
              style={{
                fontFamily: "outfit-medium",
                fontSize: 20,
              }}
            >
              {tripData?.locationInfo}
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 25,
            display: "flex",
            flexDirection: "row",
            gap: 20,
          }}
        >
          <Text
            style={{
              fontSize: 35,
            }}
          >
            🧾
          </Text>
          <View>
            <Text
              style={{
                fontFamily: "outfit",
                fontSize: 20,
                color: "grey",
              }}
            >
              Travel Dates
            </Text>
            <Text
              style={{
                fontFamily: "outfit-medium",
                fontSize: 20,
              }}
            >
              {tripData?.startDate.format("DD MMM") +
                " To " +
                tripData?.endDate.format("DD MMM")+"  ("+tripData?.noOfDays+" days)"}
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 25,
            display: "flex",
            flexDirection: "row",
            gap: 20,
          }}
        >
          <Text
            style={{
              fontSize: 35,
            }}
          >
            {tripData.traveler.icon}
          </Text>
          <View>
            <Text
              style={{
                fontFamily: "outfit",
                fontSize: 20,
                color: "grey",
              }}
            >
              Who is Travelling
            </Text>
            <Text
              style={{
                fontFamily: "outfit-medium",
                fontSize: 20,
              }}
            >
              {tripData.traveler.title}
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 25,
            display: "flex",
            flexDirection: "row",
            gap: 20,
          }}
        >
          <Text
            style={{
              fontSize: 35,
            }}
          >
            {tripData.budget.icon}
          </Text>
          <View>
            <Text
              style={{
                fontFamily: "outfit",
                fontSize: 20,
                color: "grey",
              }}
            >
              Budget
            </Text>
            <Text
              style={{
                fontFamily: "outfit-medium",
                fontSize: 20,
              }}
            >
              {tripData.budget.title}
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity 
      style={{
        backgroundColor:"black",
        padding:15,
        marginTop:60,
        borderRadius:15
      }}>
        <Text 
        onPress={()=>router.replace("/create-trip/GenerateTrip")}
        style={{
            color:"white",
            textAlign:"center",
            fontFamily:"outfit",
            fontSize:20
        }}>
            Build My Trip
        </Text>
      </TouchableOpacity>
    </View>
  );
}
