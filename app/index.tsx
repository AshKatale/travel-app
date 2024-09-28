import { Text, View } from "react-native";
import Login from "../components/Login";
import * as Font from "expo-font";
import { useEffect, useState } from "react";
import { auth } from "../configs/FireBaseConfig";
import { Redirect } from "expo-router";

export default function Index() {
  const user = auth.currentUser;

  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        outfit: require("../assets/fonts/Outfit-Regular.ttf"),
        "outfit-bold": require("../assets/fonts/Outfit-Bold.ttf"),
        "outfit-Medium": require("../assets/fonts/Outfit-Medium.ttf"),
      });
      setFontLoaded(true);
    }
    loadFont();
  }, []);
  if (!fontLoaded) return null;
  return <View >{user ? <Redirect href={"/mytrip" }/> : <Login />}</View>;
}
