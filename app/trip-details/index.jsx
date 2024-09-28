import { View, Text, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
// Import the local placeholder image
import placeholderImage from "../../assets/images/placeHolder.jpg";
import moment from "moment";
import FlightInfo from "../../components/TripDetails/FlightInfo";
import HotelList from "../../components/TripDetails/HotelList";
import PlannedTrip from "../../components/TripDetails/PlannedTrip";

export default function TripDetails() {
  const navigation = useNavigation();
  const { trip, tripMain, imageUrl: passedImageUrl } = useLocalSearchParams();
  const [tripDetails, setTripDetails] = useState(null);

  const [tripPlan, setTripPlan] = useState([]);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
    const parsedTrip = JSON.parse(trip);
    const parsedTripPlan = JSON.parse(tripMain);
    setTripPlan(parsedTripPlan);
    setTripDetails(parsedTrip);
  }, [trip, tripMain]); // Add dependencies to useEffect

  return (
    <ScrollView>
      <Image
        source={passedImageUrl ? { uri: passedImageUrl } : placeholderImage}
        style={{
          width: "100%",
          height: 330,
          objectFit: "cover",
        }}
      />
      <View
        style={{
          padding: 15,
          backgroundColor: "white",
          height: "100%",
          marginTop: -30,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}
      >
        <Text style={{ fontSize: 25, fontFamily: "outfit-bold" }}>
          {tripDetails?.locationInfo}
        </Text>
        <View style={{ display: "flex", flexDirection: "row", marginTop: 5 }}>
          <Text style={{ fontFamily: "outfit", fontSize: 18, color: "grey" }}>
            {tripDetails && moment(tripDetails.startDate).format("DD MMM YYYY")}
            <Text> </Text>
          </Text>
          <Text style={{ fontFamily: "outfit", fontSize: 18, color: "grey" }}>
            - {tripDetails && moment(tripDetails.endDate).format("DD MMM YYYY")}
          </Text>
        </View>
        <Text style={{ fontFamily: "outfit", fontSize: 18, color: "grey" }}>
          🚐 {tripDetails && tripDetails.traveler.title}
        </Text>

        {/* flight info */}
        {tripPlan?.tripPlan?.flightDetails && (
          <FlightInfo flightData={tripPlan.tripPlan.flightDetails} />
        )}
        {/* Hotel info */}
        {tripPlan?.tripPlan?.hotelOptions && (
          <HotelList hotelList={tripPlan.tripPlan.hotelOptions} />
        )}
        {/* Trip day planner */}
        {tripPlan?.tripPlan?.dayPlan && (
          <PlannedTrip details={tripPlan.tripPlan.dayPlan} />
        )}
      </View>
    </ScrollView>
  );
}
