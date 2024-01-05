import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function DoctorPatientDetail({navigation}) {
  const route = useRoute();
  const { name, surname, image } = route.params;
  return (
    <View 
    style={{
      height:"100%"
    }}>
      <View
        style={{
          display: `flex`,
          flexDirection: `row`,
          justifyContent: `space-between`,
          padding: 10,
        }}
      >
        <Text style={{ fontSize: 25, textAlign: `center`, marginTop: 15 }}>
          {name} {surname}
        </Text>
        <View>
          <Image
            style={{ width: 70, height: 70, borderRadius: 50 }}
            source={{ uri: image }}
          />
        </View>
      </View>
      <Text style={{ fontSize: 20, textAlign: `center`, marginTop: 1 }}>
        Egzersizler
      </Text>

      <TouchableOpacity
        style={{
          position: "absolute",
          bottom: 40,
          right: 20,
          backgroundColor: "#E37737",
          borderRadius: 50,
          width: 80,
          height: 80,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => navigation.navigate("doctor-add-exercise")}
      >
        <Ionicons name="add" size={40} color="black" />
      </TouchableOpacity>
    </View>
  );
}
