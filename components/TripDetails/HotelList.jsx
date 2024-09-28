import { View, Text, FlatList, Image } from "react-native";
import React from "react";

export default function HotelList({ hotelList }) {
  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontFamily: "outfit-bold", fontSize: 20 }}>
        🏨Hotel Recommendations
      </Text>
      <View>
        <FlatList
          style={{ marginTop: 8 }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={hotelList}
          renderItem={({ item, index }) => {
            return (
              <View style={{ marginRight: 20, width: 180 }}>
                <Image
                  style={{ width: 180, height: 120, borderRadius: 15 }}
                  source={require("../../assets/images/placeHolder.jpg")}
                />
                <View style={{padding:5}}>
                  <Text style={{ fontFamily: "outfit-medium", fontSize: 17 }}>
                    {item.hotelName}
                  </Text>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      width: 180,
                    }}
                  >
                    <Text style={{ fontFamily: "outfit" }}>
                      🌟 {item.rating}
                    </Text>
                    <Text style={{ fontFamily: "outfit" }}>
                      💰 {item.price}
                    </Text>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}
