import { useRoute } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import { auth } from '../firebase';

const ExerciseDetailScreen = () => {
    const route = useRoute();

  const { exercise } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.sliderContainer}>
      <Swiper style={styles.wrapper} showsButtons={true}>
      <View syle={{display:`flex`,justifyContent:`center`}}>
      <Image style={styles.sliderImage} source={{uri:'https://fitnessaktif.com/wp-content/uploads/2019/07/bench-press-2.jpg'}} />
      </View>
      <Image style={styles.sliderImage} source={{uri:'https://fitnessaktif.com/wp-content/uploads/2019/07/bench-press-2.jpg'}} />
      <Image style={styles.sliderImage} source={{uri:'https://fitnessaktif.com/wp-content/uploads/2019/07/bench-press-2.jpg'}} />

    </Swiper>

        {/* Diğer resimler buraya eklenebilir */}
      </View>
      <Text style={styles.exerciseName}>{exercise.egzersiz_adi}</Text>
      <Text style={styles.description}>{exercise.aciklama}</Text>
      <Text style={styles.infoText}>Tekrar Sayısı: {exercise.tekrar_sayisi}</Text>
      <Text style={styles.infoText}>Set Sayısı: {exercise.set_sayisi}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  sliderContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  sliderImage: {
    width: 300,
    height: 300,
    marginRight:`auto`,
    marginLeft:`auto`,
    borderRadius: 8,
  },
  exerciseName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
    textAlign: 'center',
  },
  infoText: {
    fontSize: 16,
    marginBottom: 8,
  },
  wrapper: {
    height:430,
    textAlign:`center`,
    // marginTop:-20
  },

});

export default ExerciseDetailScreen;