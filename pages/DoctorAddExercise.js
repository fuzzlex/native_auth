import React, { useState } from "react";
import { View, Text,  Button, ScrollView } from "react-native";
import { Picker  } from '@react-native-picker/picker';
// import TextInput from "react-native-paper";
import { Input } from '@rneui/themed';


export default function DoctorAddExercise() {
  const [name, setName] = useState("");
  const [text, setText] = React.useState("");

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
    <ScrollView>

    <View style={{ margin: 20,  padding:50, borderWidth:2 }}>
    <Text style={{ fontSize: 18 }}>Yeni Egzersiz Ekle</Text>
      <Text style={{ fontSize: 18, marginBottom:-50 }}>İsim:</Text>
      <Picker
        selectedValue={name}
        onValueChange={(value) => setName(value)}
        style={{ marginBottom: 20 }}
      >
      {pickers}

      </Picker>



      <Text style={{ fontSize: 18 }}>Başlama Tarihi:</Text>
    
      <Text style={{ fontSize: 18 }}>Gün Sayısı:</Text>
      <Input
      // label="Email"
      value={text}
      onChangeText={text => setText(text)}
      keyboardType="numeric"
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
    </ScrollView>
  );
}