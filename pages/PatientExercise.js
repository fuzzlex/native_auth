import { View, Text,ScrollView } from "react-native";
import React from "react";
import { Card } from "react-native-paper";
import { Image } from "@rneui/base";
// import { ScrollView } from "react-native-gesture-handler";

export default function PatientExercise({navigation}) {
  const exercises = require("../helpers/myExercise.json");
  // const exercises = [
  //   {
  //     name: `Ahmet Zeki`,
  //     surname: `Tas`,
  //     age: 22,
  //     image: "https://picsum.photos/id/2/250/350",
  //   },
  //   {
  //     name: `Zeki`,
  //     surname: `Bal`,
  //     age: 22,
  //     image: "https://picsum.photos/id/3/250/350",
  //   },
  //   {
  //     name: `Yusuf`,
  //     surname: `Bagcilar`,
  //     age: 42,
  //     image: "https://picsum.photos/id/4/250/350",
  //   },
  //   {
  //     name: `Ahmet Zeki`,
  //     surname: `Tas`,
  //     age: 22,
  //     image: "https://picsum.photos/id/5/250/350",
  //   },
  //   {
  //     name: `Ahmet Zeki`,
  //     surname: `Tas`,
  //     age: 22,
  //     image: "https://picsum.photos/id/6/250/350",
  //   },
  //   {
  //     name: `Ahmet Zeki`,
  //     surname: `Tas`,
  //     age: 22,
  //     image: "https://picsum.photos/id/7/250/350",
  //   },
  // ];
  return (
    <View>
    <ScrollView>
      {exercises.map((exercise) => (
        <Card
          onPress={() => navigation.navigate(`patient-exercise-detail`, exercise)}
          style={{
            margin: 5,
            padding: 25,
            backgroundColor: `#023047`,
            margin: 20,
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
              <Image
                style={{ width: 70, height: 70, borderRadius: 50 }}
                source={{ uri: exercise.image }}
              />
            </View>
            <View>
              <Text
                style={{ color: `white`, fontSize: 22 }}
                variant="titleLarge"
              >
                {exercise.name} {exercise.surname}
              </Text>
              <Text
                style={{ color: `white`, fontSize: 22 }}
                variant="titleLarge"
              >
                Yas: {exercise.age}
              </Text>
              <Text
                style={{ color: `white`, fontSize: 15 }}
                variant="titleLarge"
              >
                Tedavi Baslama: 15/12/2023
              </Text>
            </View>
            
          </Card.Content>
          <Card.Actions></Card.Actions>
        </Card>
      ))}
      </ScrollView>
    </View>
  );
}
