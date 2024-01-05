import React from "react";
import { View,  StyleSheet, TouchableOpacity } from "react-native";
import { Text, Card, Paper } from "react-native-paper";
import Navbar from "../components/Navbar";
import { Image } from "@rneui/base";


export default function DoctorHome({ navigation }) {
  const styles = StyleSheet.create({
    text: {
      padding: 60,
      borderRadius: 5,
      backgroundColor: "purple",
      marginBottom: 6,
      color: "cyan",
      fontWeight: "bold",
      textAlign: "center",
      margin: 3,
      alignSelf: "flex-start",
    },
  });
  return (
    <View>
    <Navbar />

    <View
      style={{
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `center`,
        alignItems: `center`,
        minHeight: `90%`,
        backgroundColor:`#f7dccb`,
        marginTop:-30

      }}
    >

      <Card onPress={() => navigation.navigate(`doctor-patient`)} style={{ margin: 5, padding: 35, backgroundColor: `#e37738` }}>
        <Card.Content>
        <Image
            style={{ width: 80, height: 80, marginLeft:20 }}
            source={require('../assets/exercise-list.png')}
          />
          <Text style={{ color: `white`, fontSize: 22, fontWeight:500 }} variant="titleLarge">
            HASTALARIM
          </Text>
        </Card.Content>
        <Card.Actions></Card.Actions>
      </Card>

      <Card onPress={() => navigation.navigate(`doctor-exercies`)} style={{ margin: 5, padding: 35, backgroundColor: `#e37738` }}>
        <Card.Content>
        <Image
            style={{ width: 80, height: 80, marginLeft:20 }}
            source={require('../assets/exercises.png')}
          />
          <Text style={{ color: `white`, fontSize: 22, fontWeight:500  }} variant="titleLarge">
            EGZERSIZLER
          </Text>
        </Card.Content>
        <Card.Actions></Card.Actions>
      </Card>
    </View>
    </View>

  );
}
