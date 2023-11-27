import React from 'react'
import { View, Text, StyleSheet,  TouchableOpacity } from "react-native";

export default function Portfolyo({navigation}) {
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
      <Text>Portfolyo</Text>
      <TouchableOpacity
          key="0"
          style={styles.text}
          onPress={() => navigation.navigate("Navbar")}
        >
          <Text style={{ color: "white" }}>Home</Text>
        </TouchableOpacity>
    </View>
  )
}