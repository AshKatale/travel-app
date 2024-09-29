
# AI Travel Planner

AI Travel Planner is an Expo-based React Native project designed to help users plan their travel experiences effortlessly with the help of various APIs. The app allows users to sign up, log in, and access personalized travel plans based on their preferences.

## Key Features

- **Firebase Authentication**: Secure user login and registration.
- **Personalized Travel Planning**: Users can create and manage their travel itineraries.
- **Gemini API Integration**: Utilizes the Gemini API for intelligent trip planning, ensuring users have the best options for their travels.
- **Map API**: Enables users to search for places easily.
- **Places Photo API**: Fetches stunning images of various locations to enhance the user experience.
- **User-Friendly Interface**: Built with React Native components for a seamless mobile experience.

## APK Download

You can download the latest APK for the **AI Travel Planner** from the link below:

[Download AI Travel Planner APK](https://github.com/AshKatale/travel-app/releases/latest) <!-- update with the link after uploading the APK -->

## Installation

### Prerequisites

- Node.js and npm installed
- Expo CLI installed globally (`npm install -g expo-cli`)

### Steps to run the project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/AshKatale/travel-app.git
   ```

2. Install dependencies:

   ```bash
   cd travel-app
   npm install
   ```

3. Create a `.env` file in the root directory and add your environment variables (Firebase API keys, etc.):

   ```bash
   API_KEY=your-api-key
   AUTH_DOMAIN=your-auth-domain
   ```

4. Start the Expo development server:

   ```bash
    npx expo start
   ```

5. Scan the QR code with the Expo Go app on your mobile device to run the app locally.

## Building APK

To build the APK file for Android, follow these steps:

1. Install EAS CLI:

   ```bash
   npm install -g eas-cli
   ```

2. Configure `eas.json`:

   Ensure your `eas.json` file includes the necessary environment variables and Android build configuration.

3. Build the APK:

   ```bash
   eas build -p android --profile production
   ```

## Contributing

Feel free to contribute to this project by opening issues and submitting pull requests.

## License

This project is licensed under the MIT License.
