import { View, Text, StyleSheet, ToastAndroid } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import { router } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../configs/FireBaseConfig";

export default function SignIn() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const OnSignIn = ()=>{

    if(!email || !password){
      ToastAndroid.show("Please Enter All Details", ToastAndroid.BOTTOM);
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    // const user = userCredential.user;
    // console.log(user);
    router.replace("/mytrip");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    if(errorCode=='auth/invalid-credential' || errorCode=='auth/invalid-email')
    {
      ToastAndroid.show("Invalid Credentials", ToastAndroid.BOTTOM);
    }
  });
  }

  return (
    <View style={{ padding: 20, backgroundColor: "white", height: "100%" }}>
      <TouchableOpacity onPress={()=>router.back()}>

      
      <Ionicons style={{marginLeft:10, marginTop:20}} name="arrow-back" size={24} color="black" />
      
      </TouchableOpacity>
      <View style={{ padding: 10 }}>
        <Text
          style={{ fontSize: 30, fontFamily: "outfit-bold" }}
        >
          Let's Sign You In
        </Text>
        <Text
          style={{
            fontSize: 30,
            fontFamily: "outfit",
            marginTop: 20,
            color: "grey",
          }}
        >
          Welcome Back
        </Text>
        <Text
          style={{
            fontSize: 30,
            fontFamily: "outfit",
            marginTop: 15,
            color: "grey",
          }}
        >
          You have been missed!
        </Text>
      </View>

      <View style={{ marginTop: 30, padding: 10 }}>
        <Text style={style.text}>Email</Text>
        <TextInput onChangeText={(value)=>setEmail(value)} style={style.input} placeholder="Enter Email"></TextInput>
      </View>
      <View style={{ marginTop: 10, padding: 10 }}>
        <Text style={style.text}>Password</Text>
        <TextInput
        onChangeText={(value)=>setPassword(value)}
          secureTextEntry={true}
          style={style.input}
          placeholder="Enter Password"
        ></TextInput>
      </View>

      <TouchableOpacity
      onPress={OnSignIn}
        style={{ backgroundColor: "black", borderRadius: 20, marginTop: 20 }}
      >
        <Text
          style={{
            color: "white",
            padding: 15,
            textAlign: "center",
            fontSize: 16,
          }}
        >
          Sign In
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.replace("auth/sign-up")}
        style={{ backgroundColor: "white", borderRadius: 20, marginTop: 20 }}
      >
        <Text
          style={{
            borderWidth: 1,
            borderRadius: 20,
            padding: 15,
            textAlign: "center",
            fontSize: 16,
          }}
        >
          Create Account
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  input: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "grey",
    padding: 15,
    fontFamily: "outfit",
    fontSize: 20,
  },
  text: {
    fontSize: 16,
    fontFamily: "outfit",
    marginBottom: 5,
    marginLeft: 5,
  },
});
