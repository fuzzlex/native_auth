import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const ExerciseListScreen = ({ navigation }) => {
  const egzersizler = require("../helpers/exercies.json");
  // Egzersiz listesi

  // Egzersiz kartlarını oluşturma
  const renderExerciseCards = () => {
    return egzersizler.map((exercise, index) => {
      return (
        <TouchableOpacity
          key={index}
          style={styles.cardContainer}
          onPress={() =>
            navigation.navigate("doctor-exercies-detail", { exercise })
          }
        >
          <Text style={styles.exerciseName}>{exercise.egzersiz_adi}</Text>
        </TouchableOpacity>
      );
    });
  };

  return (
    <ScrollView>
      <View style={styles.container}>{renderExerciseCards()}</View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  cardContainer: {
    width: "100%",
    padding: 16,
    marginBottom: 16,
    backgroundColor: "#e99863",
    borderRadius: 8,
  },
  exerciseName: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ExerciseListScreen;
