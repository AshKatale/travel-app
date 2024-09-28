import { View, Text, Image } from 'react-native'
import React, { useState, useEffect } from 'react'

import moment from 'moment'

// Import the local placeholder image
import placeholderImage from '../../assets/images/placeHolder.jpg';
import { TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

export default function UserTripCard({trip}) {
  const [imageUrl, setImageUrl] = useState(null);
  

  const formatData = (data) => {
    return JSON.parse(data)
  }

  useEffect(() => {
    const PEXELS_API_KEY =process.env.EXPO_PUBLIC_PEXELS_API_KEY;
    const placeName = trip.tripPlan?.location;
    const url = `https://api.pexels.com/v1/search?query=${placeName}&per_page=1`;

    fetch(url, {
      headers: {
        Authorization: PEXELS_API_KEY
      }
    })
      .then(response => response.json())
      .then(data => {
        const fetchedImageUrl = data.photos[0]?.src.medium;
        setImageUrl(fetchedImageUrl);
      })
      .catch(error => {
        console.error('Error:', error);
        setImageUrl(null);
      });
  }, [trip]);

  return (
    <View style={{
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "center"
    }}>
      <TouchableOpacity >
      <Image 
        style={{height: 100, width: 100, marginTop: 20, borderRadius: 15}} 
        source={imageUrl ? {uri: imageUrl} : placeholderImage}
      />
      </TouchableOpacity>
      <View>
        <Text style={{ fontFamily:'outfit-medium', fontSize:18}}>{trip.tripPlan?.location}</Text>
        <Text style={{ fontFamily:'outfit', fontSize:14, color:'grey'}}>
          {moment(formatData(trip.tripData).startDate).format("DD MMM YYYY")}
        </Text>
        <Text style={{ fontFamily:'outfit', fontSize:14 , color:"grey"}}>
          Traveling: {formatData(trip.tripData).traveler.title}
        </Text>
      </View>
    </View>
  )
}