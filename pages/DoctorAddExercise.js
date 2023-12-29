import React, { useState } from "react";
import { View, Text,  Button ,TextInput} from "react-native";
import { Picker  } from '@react-native-picker/picker';
// import TextInput from "react-native-paper";


export default function DoctorAddExercise() {
  const [name, setName] = useState("");
//   const [startDate, setStartDate] = useState(new Date());
  const [duration, setDuration] = useState("");
  const [frequency, setFrequency] = useState("");


  const handleAddButton = () => {
    // Ekleme işlemlerini burada gerçekleştirin
    console.log("Ekle butonuna tıklandı");
    console.log("Name:", name);
    console.log("Start Date:", startDate);
    console.log("Duration:", duration);
    console.log("Frequency:", frequency);
  };
  const egzersizler = require("../helpers/exercies.json");
  const pickers = egzersizler.map((e,i) => 
    <Picker.Item label={e.egzersiz_adi} value={i}/>
    )

    


  return (
    <View style={{ margin: 20 }}>
      <Text style={{ fontSize: 18 }}>İsim:</Text>
      <Picker
        selectedValue={name}
        onValueChange={(value) => setName(value)}
        style={{ marginBottom: 20 }}
      >
      {pickers}

      </Picker>

      <Text style={{ fontSize: 18 }}>Başlama Tarihi:</Text>
    
      <Text style={{ fontSize: 18 }}>Gün Sayısı:</Text>
      <TextInput
        value={duration}
        onChangeText={(text) => setDuration(text)}
        keyboardType="numeric"
        style={{ marginBottom: 20, borderWidth: 1, padding: 10 }}
      />

      <Text style={{ fontSize: 18 }}>Frekans:</Text>
      <Picker
        selectedValue={frequency}
        onValueChange={(value) => setFrequency(value)}
        style={{ marginBottom: 20 }}
      >
        <Picker.Item label="Günde 2 defa" value="Günde 2 defa" />
        <Picker.Item label="Gün 1 defa" value="Gün 1 defa" />
        <Picker.Item label="İki günde bir" value="İki günde bir" />
      </Picker>

      <Button title="Ekle" onPress={handleAddButton} />
    </View>
  );
}