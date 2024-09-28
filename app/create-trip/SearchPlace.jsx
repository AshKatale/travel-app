import React, { useState, useEffect, useContext } from "react";

import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { router } from "expo-router";
import axios from "axios";
import { CreateTripContext } from "../../context/CreateTripContext.jsx";
import { useRoute } from "@react-navigation/native";

const API_KEY=process.env.EXPO_PUBLIC_AUTOCOMPLETE_API_KEY;

export default function SearchPlace() {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const [tripData, setTripData] = useContext(CreateTripContext);
  const route = useRoute();

  useEffect(() => {
    // console.log("Trip data updated:", tripData);
  }, [tripData]);

  const handleSearch = async (text) => {
    setSearchQuery(text);
    if (text.length > 2) {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.geoapify.com/v1/geocode/autocomplete?text=${encodeURIComponent(
            text
          )}&apiKey=${API_KEY}`
        );
        const results = response.data.features.map((feature) => ({
          name: feature.properties.formatted,
          id: feature.properties.place_id,
        }));
        setSuggestions(results);
      } catch (error) {
        console.error("Error fetching suggestions:", error);
        setSuggestions([]);
      } finally {
        setLoading(false);
      }
    } else {
      setSuggestions([]);
    }
  };

  const handleSelectPlace = async (place) => {
    // console.log("Selected place:", JSON.stringify(place, null, 2));
    setSearchQuery(place.name);
    setSuggestions([]);

    try {
      const detailsResponse = await axios.get(
        `https://api.geoapify.com/v2/place-details?id=${place.id}&apiKey=${API_KEY}`
      );
      const placeDetails = detailsResponse.data.features[0];

      const name = placeDetails.properties.formatted;
      const { lat, lon } = placeDetails.properties;
      const mapUrl = `https://www.google.com/maps?q=${lat},${lon}`;

      // Fetch place image
      const imageResponse = await axios.get(
        `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(name)}&format=json&apiKey=${API_KEY}`
      );
      const imageUrl = imageResponse.data.results[0]?.image?.url || 'No image available';

      // Create place object
      const placeObject = {
        locationInfo: name,
        longitude: lon,
        latitude: lat,
        url: mapUrl,
        image: imageUrl
      };

      setTripData(placeObject);
      // console.log("Trip data:", tripData);
      router.push('/create-trip/SelectTraveler');
    } catch (error) {
      console.error("Error fetching place details:", error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search for a place"
        value={searchQuery}
        onChangeText={handleSearch}
      />
      {loading && <ActivityIndicator size="small" color="#0000ff" />}
      <FlatList
        data={suggestions}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.suggestionItem}
            onPress={() => handleSelectPlace(item)}
          >
            <Text style={styles.suggestionText}>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    marginTop: 55,
    backgroundColor: "white",
    height: "100%",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  suggestionItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  suggestionText: {
    fontSize: 16,
  },
});
