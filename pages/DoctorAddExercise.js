import React, { useState } from "react";
import { View, Text,  Button, ScrollView } from "react-native";
// import TextInput from "react-native-paper";
import CalendarApp from "./CalendarComp";
import DropDownPicker from 'react-native-dropdown-picker';



export default function DoctorAddExercise() {
  const [name, setName] = useState("");
  const [text, setText] = React.useState("");

//   const [startDate, setStartDate] = useState(new Date());
  const [frequency, setFrequency] = useState("");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const egzersizler = require("../helpers/exercies.json");
  const pickers = egzersizler?.map((e,i) => {
    return {"label":e.egzersiz_adi, "value":i}
  }
    )
  const [items, setItems] = useState(pickers);


  const handleAddButton = () => {
    // Ekleme işlemlerini burada gerçekleştirin
    console.log("Ekle butonuna tıklandı");
    console.log("Name:", name);
    console.log("Start Date:", startDate);
    console.log("Duration:", duration);
    console.log("Frequency:", frequency);
  };


    


  return (
    <>





    <ScrollView>

    <View style={{ margin: 10,  padding:30, borderWidth:2 }}>

      <CalendarApp />
  
      <View style={{flex:1, padding: 0, margin: 0}}>
    
     

      </View>
    


      <Button title="Ekle" onPress={handleAddButton} />
    </View>
    </ScrollView>
    </>

  );
}