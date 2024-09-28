import { View, Text, StyleSheet, TextInput, ToastAndroid } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../configs/FireBaseConfig";

export default function SignUp() {
  const navigation = useNavigation();
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const OnCreateAccount = ()=>{

    if(!email || !password || !fullName){
      ToastAndroid.show("Please Enter All Details", ToastAndroid.BOTTOM);
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    router.replace("/mytrip");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
    if(errorCode == "auth/email-already-in-use"){
      ToastAndroid.show("Email Already in Use", ToastAndroid.BOTTOM);
    }
    if(errorCode == "auth/invalid-email"){
      ToastAndroid.show("Invalid Email", ToastAndroid.BOTTOM);
    }
    if(errorCode == "auth/weak-password"){
      ToastAndroid.show("Weak Password", ToastAndroid.BOTTOM);
    }
    // ..
  });
  }

  return (
    <View style={{ padding: 15, backgroundColor:"white", height:"100%" }}>
      <TouchableOpacity onPress={()=>router.back()}>

      
<Ionicons style={{marginLeft:10, marginTop:20}} name="arrow-back" size={24} color="black" />

</TouchableOpacity>
      <View style={{ padding: 10 }}>
        <Text
          style={{
            fontSize: 30,
            fontFamily: "outfit-bold",
            marginTop: 5,
            textAlign: "center",
          }}
        >

          Create an Account
        </Text>
      </View>
      <View style={{ marginTop: 10, padding: 10 }}>
        <Text style={style.text}>Full Name</Text>
        <TextInput onChangeText={(value)=>setFullName(value)} style={style.input} placeholder="Enter Full Name"></TextInput>
      </View>
      <View style={{ marginTop: 10, padding: 10 }}>
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
      onPress={OnCreateAccount}
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
          Create Account
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.replace("auth/sign-in")}
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
          Sign In
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
