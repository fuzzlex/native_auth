import { View, Text,ScrollView  } from "react-native";
import React from "react";
import { Card } from "react-native-paper";
import { Image } from "@rneui/base";
// import { ScrollView } from "react-native-gesture-handler";

export default function DoctorPatients({navigation}) {
  const patients = require("../helpers/patients.json");
  return (
    <View>
      <Text
      style={{textAlign:"center", fontSize:29, marginTop:19}}
      >Kayıtlı Hastalar</Text>
    <ScrollView>
      {patients.map((patient,index) => (
        <Card
        key={index}
          onPress={() => navigation.navigate(`doctor-patient-detail`, patient)}
          style={{
            margin: 5,
            padding: 25,
            backgroundColor: (index == 1 || index == 0) ? "#E37737" : `#efba96`,
          }}
        >
          <Card.Content
            style={{
              display: `flex`,
              flexDirection: `row`,
              justifyContent: `space-between`,

            }}
          >
            <View>
              <Text
                style={{ color: `black`, fontSize: 22 }}
                variant="titleLarge"
              >
                {patient.name} {patient.surname}
              </Text>
              <Text
                style={{ color: `black`, fontSize: 22 }}
                variant="titleLarge"
              >
                Yas: {patient.age}
              </Text>
              <Text
                style={{ color: `black`, fontSize: 15 }}
                variant="titleLarge"
              >
                Tedavi Baslama: 15/12/2023
              </Text>
            </View>
            <View>
              <Image
                style={{ width: 70, height: 70, borderRadius: 50 }}
                source={{ uri: patient.image }}
              />
            </View>
          </Card.Content>
          <Card.Actions></Card.Actions>
        </Card>
      ))}
      </ScrollView>
     
    </View>
  );
}
