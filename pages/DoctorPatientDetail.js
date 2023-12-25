import { View, Text, Image } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

export default function DoctorPatientDetail() {
  const route = useRoute();
  const { name, surname, image } = route.params;
  return (
    <View>
      <View
        style={{
          display: `flex`,
          flexDirection: `row`,
          justifyContent: `space-between`,
          padding: 20,
        }}
      >
        <Text style={{ fontSize: 30, textAlign: `center`, marginTop: 15 }}>
          {name} {surname}
        </Text>
        <View>
          <Image
            style={{ width: 70, height: 70, borderRadius: 50 }}
            source={{ uri: image }}
          />
        </View>
      </View>
      <Text style={{ fontSize: 30, textAlign: `center`, marginTop: 15 }}>
          Egzersizler
        </Text>
    </View>
  );
}
