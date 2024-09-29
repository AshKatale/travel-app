
# Travel App

Travel App is an Expo-based React Native project designed to help users plan their travel experiences with the help of Firebase Authentication and Database services. The app allows users to sign up, log in, and access personalized travel plans based on their preferences.

## Features

- Firebase Authentication (Sign In, Sign Up)
- Personalized Travel Planning
- Integration with Firebase Firestore for managing user data
- User-friendly UI with React Native components
- Use of Gemini AI model for trip planning

## APK Download

You can download the latest APK for the **Travel App** from the link below:

[Download Travel App APK](https://github.com/AshKatale/travel-app/releases/latest)

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
