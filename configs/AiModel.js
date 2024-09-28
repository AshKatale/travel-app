/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey =process.env.EXPO_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
   export const chatSession = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
        {
            role: "user",
            parts: [
              {text: "Generate Travel Plan for Location :Mumbai City District, Mumbai, Maharashtra, India, for 2 Days and 1 Night for Just Me with a Cheap budget with a Flight details , Flight Price with Booking url, Hotel options list with HotelName, Hotel Address, Price, Hotel image url, geo coordinate, rating descriptions and Places to visit nearby with place name, Place Details, Place Image url ,Geo Coordinates, ticket pricing, time travel each of location for 2 day and 1 night with each day plan with best time to visit in JSON format."},
            ],
          },
          {
            role: "model",
            parts: [
              {text: "```json\n{\n  \"location\": \"Mumbai City District, Mumbai, Maharashtra, India\",\n  \"totalDays\": 2,\n  \"totalNights\": 1,\n  \"traveler\": \"Solo\",\n  \"budget\": \"Cheap\",\n  \"flightDetails\": {\n    \"airline\": \"IndiGo\",\n    \"departureAirport\": \"DEL\", \n    \"arrivalAirport\": \"BOM\",\n    \"flightPrice\": \"$200\", \n    \"bookingUrl\": \"https://www.goindigo.in/\" \n  },\n  \"hotelOptions\": [\n    {\n      \"hotelName\": \"The Fern - Mumbai, Goregaon\",\n      \"hotelAddress\": \"Plot No. 202 & 203, Western Express Highway, Goregaon (East), Mumbai, Maharashtra 400063\",\n      \"price\": \"$40\",\n      \"hotelImageUrl\": \"https://images.trvl-media.com/hotels/1000000/900000/899000/898979/898979_103_b.jpg\",\n      \"geoCoordinate\": \"19.1224° N, 72.8672° E\",\n      \"rating\": \"4.5\",\n      \"ratingDescription\": \"Great value for money, clean rooms, friendly staff, good location.\"\n    },\n    {\n      \"hotelName\": \"Treebo Trend The City\",\n      \"hotelAddress\": \"161-162, SV Road, Near Bhavani Devi Mandir, Jogeshwari West, Mumbai, Maharashtra 400047\",\n      \"price\": \"$35\",\n      \"hotelImageUrl\": \"https://images.trvl-media.com/hotels/1000000/900000/899000/898789/898789_103_b.jpg\",\n      \"geoCoordinate\": \"19.1198° N, 72.8591° E\",\n      \"rating\": \"4.0\",\n      \"ratingDescription\": \"Basic but comfortable, convenient location, good for budget travelers.\"\n    }\n  ],\n  \"placesToVisit\": [\n    {\n      \"placeName\": \"Gateway of India\",\n      \"placeDetails\": \"Iconic arch built in 1924, a popular landmark for tourists and locals alike.\",\n      \"placeImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Gateway_of_India_Mumbai_India.jpg/1280px-Gateway_of_India_Mumbai_India.jpg\",\n      \"geoCoordinate\": \"18.9221° N, 72.8347° E\",\n      \"ticketPricing\": \"Free\"\n    },\n    {\n      \"placeName\": \"Chhatrapati Shivaji Maharaj Terminus (CST)\",\n      \"placeDetails\": \"UNESCO World Heritage Site, stunning Victorian Gothic architecture railway station.\",\n      \"placeImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/CST_Mumbai.jpg/1280px-CST_Mumbai.jpg\",\n      \"geoCoordinate\": \"18.9416° N, 72.8407° E\",\n      \"ticketPricing\": \"Free\"\n    },\n    {\n      \"placeName\": \"Dhobi Ghat\",\n      \"placeDetails\": \"Open-air laundry, a unique sight of thousands of clothes being washed.\",\n      \"placeImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Dhobi_Ghat_2010-11-26.jpg/1280px-Dhobi_Ghat_2010-11-26.jpg\",\n      \"geoCoordinate\": \"18.9402° N, 72.8365° E\",\n      \"ticketPricing\": \"Free\"\n    },\n    {\n      \"placeName\": \"Marine Drive\",\n      \"placeDetails\": \"Beautiful promenade with stunning views of the Arabian Sea, known as the 'Queen's Necklace' at night.\",\n      \"placeImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Marine_Drive_Mumbai_India.jpg/1280px-Marine_Drive_Mumbai_India.jpg\",\n      \"geoCoordinate\": \"18.9395° N, 72.8279° E\",\n      \"ticketPricing\": \"Free\"\n    },\n    {\n      \"placeName\": \"Elephanta Caves\",\n      \"placeDetails\": \"Ancient cave temples dedicated to the Hindu god Shiva, UNESCO World Heritage Site.\",\n      \"placeImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Elephanta_Caves_India.jpg/1280px-Elephanta_Caves_India.jpg\",\n      \"geoCoordinate\": \"18.9845° N, 73.0400° E\",\n      \"ticketPricing\": \"₹ 25 (Indian nationals), ₹ 600 (foreigners)\"\n    },\n    {\n      \"placeName\": \"Juhu Beach\",\n      \"placeDetails\": \"Popular beach for sunbathing, swimming, and enjoying street food.\",\n      \"placeImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Juhu_Beach_Mumbai_India.jpg/1280px-Juhu_Beach_Mumbai_India.jpg\",\n      \"geoCoordinate\": \"19.0603° N, 72.8445° E\",\n      \"ticketPricing\": \"Free\"\n    }\n  ],\n  \"dayPlan\": [\n    {\n      \"day\": 1,\n      \"time\": \"Morning (9:00 AM - 12:00 PM)\",\n      \"activity\": \"Visit the Gateway of India\",\n      \"description\": \"Take a stroll around the iconic arch, enjoy the bustling atmosphere, and capture some great photos.\"\n    },\n    {\n      \"day\": 1,\n      \"time\": \"Afternoon (12:00 PM - 2:00 PM)\",\n      \"activity\": \"Lunch at a local eatery\",\n      \"description\": \"Experience the vibrant street food scene in Mumbai with a delicious and affordable meal.\"\n    },\n    {\n      \"day\": 1,\n      \"time\": \"Afternoon (2:00 PM - 5:00 PM)\",\n      \"activity\": \"Explore CST\",\n      \"description\": \"Admire the architectural beauty of Chhatrapati Shivaji Maharaj Terminus and learn about its history.\"\n    },\n    {\n      \"day\": 1,\n      \"time\": \"Evening (5:00 PM - 7:00 PM)\",\n      \"activity\": \"Walk along Marine Drive\",\n      \"description\": \"Enjoy the sunset views and soak in the city's energy.\"\n    },\n    {\n      \"day\": 1,\n      \"time\": \"Evening (7:00 PM - 9:00 PM)\",\n      \"activity\": \"Dinner at a street food stall\",\n      \"description\": \"Try some local specialties and enjoy the unique dining experience.\"\n    },\n    {\n      \"day\": 2,\n      \"time\": \"Morning (9:00 AM - 12:00 PM)\",\n      \"activity\": \"Visit Dhobi Ghat\",\n      \"description\": \"Witness the fascinating open-air laundry and learn about the traditional methods.\"\n    },\n    {\n      \"day\": 2,\n      \"time\": \"Afternoon (12:00 PM - 2:00 PM)\",\n      \"activity\": \"Lunch at a restaurant\",\n      \"description\": \"Enjoy a meal with a view, perhaps at a restaurant overlooking the Arabian Sea.\"\n    },\n    {\n      \"day\": 2,\n      \"time\": \"Afternoon (2:00 PM - 5:00 PM)\",\n      \"activity\": \"Visit Juhu Beach\",\n      \"description\": \"Relax on the beach, try some street food, and enjoy the lively atmosphere.\"\n    },\n    {\n      \"day\": 2,\n      \"time\": \"Evening (5:00 PM - 7:00 PM)\",\n      \"activity\": \"Return to your hotel or airport\",\n      \"description\": \"Relax before your departure or enjoy a final walk around the city.\"\n    }\n  ],\n  \"bestTimeToVisit\": \"The best time to visit Mumbai is during the winter months (October to March) when the weather is pleasant and dry. Avoid the monsoon season (June to September) as heavy rains can disrupt travel and outdoor activities.\"\n}\n```\n\n**Please note:** \n\n* This itinerary is a suggestion and can be adjusted to your preferences.\n* Prices for flights and hotels are estimations and may vary depending on the time of year and availability.\n* You can find more details and updates on prices and booking links on the provided websites.\n* Be sure to check visa requirements and other travel regulations before your trip.\n\n**Have a fantastic trip to Mumbai!** \n"},
            ],
          },
      ],
    });
  
    // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    // console.log(result.response.text());
 