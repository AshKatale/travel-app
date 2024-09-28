import { View, Text, Image } from "react-native";
import React, { useState, useEffect } from "react";
import moment from "moment";
import { TouchableOpacity } from "react-native";
import UserTripCard from "./UserTripCard";

// Import the local placeholder image
import placeholderImage from '../../assets/images/placeHolder.jpg';
import { router } from "expo-router";

export default function UserTripList({ userTrips }) {
  const [imageUrl, setImageUrl] = useState(null);
  const LatestTrip = JSON.parse(userTrips[0].tripData);

  useEffect(() => {
    const PEXELS_API_KEY =process.env.EXPO_PUBLIC_PEXELS_API_KEY;
    const placeName = userTrips[0]?.tripPlan?.location;
    const url = `https://api.pexels.com/v1/search?query=${placeName}&per_page=1`;

    fetch(url, {
      headers: {
        Authorization: PEXELS_API_KEY
      }
    })
      .then(response => response.json())
      .then(data => {
        const fetchedImageUrl = data.photos[0]?.src.large;
        setImageUrl(fetchedImageUrl);
      })
      .catch(error => {
        console.error('Error:', error);
        setImageUrl(null);
      });
  }, [userTrips]);

  return (
    <View>
      <View style={{ marginTop: 20 }}>
        <Image
          source={imageUrl ? { uri: imageUrl } : placeholderImage}
          style={{
            width: "100%",
            height: 240,
            objectFit: "cover",
            borderRadius: 15,
          }}
        />
      </View>
      <View style={{ marginTop: 10 }}>
        <Text style={{ fontFamily: "outfit-medium", fontSize: 20 }}>
          {userTrips[0]?.tripPlan?.location}
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 5,
          }}
        >
          <Text style={{ fontFamily: "outfit", fontSize: 17, color: "grey" }}>
            {moment(LatestTrip.startDate).format("DD MMM YYYY")}
          </Text>
          <Text style={{ fontFamily: "outfit", fontSize: 17, color: "grey" }}>
            🚐{LatestTrip.traveler.title}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => router.push({
            pathname: '/trip-details',
            params: {
              trip: userTrips[0].tripData,
              tripMain: JSON.stringify(userTrips[0]),
              imageUrl: imageUrl // Pass the imageUrl as a parameter
            }
          })}
          style={{
            backgroundColor: "black",
            padding: 15,
            borderRadius: 20,
            marginTop: 10,
          }}
        >
          <Text
            style={{
              color: "white",
              fontFamily: "outfit",
              textAlign: "center",
            }}
          >
            See Your Plan
          </Text>
        </TouchableOpacity>
        {userTrips.map((trip, index) => (
          <UserTripCard trip={trip} key={index} />
        ))}
      </View>
    </View>
  );
}
