import React, { useState } from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { Input } from "@rneui/base";
import DropDownPicker from "react-native-dropdown-picker";
import { TextInput } from "react-native-paper";

LocaleConfig.locales["tr"] = {
  monthNames: [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık",
  ],
  monthNamesShort: [
    "Oca",
    "Şub",
    "Mar",
    "Nis",
    "May",
    "Haz",
    "Tem",
    "Ağu",
    "Eyl",
    "Eki",
    "Kas",
    "Ara",
  ],
  dayNames: [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ],
  dayNamesShort: ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"],
  today: "Bugün",
};
LocaleConfig.defaultLocale = "tr";
DropDownPicker.setLanguage("TR");

const CalendarApp = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [showStart, setShowStart] = useState(false);
  const [showEnd, setShowEnd] = useState(false);
  const [markedDates, setMarkedDates] = useState({});
  const [duration, setDuration] = useState("");
  const [open, setOpen] = useState(false);
  const [openExerciseModal, setOpenExerciseModal] = useState(false);
  const [frequency, setName] = useState("");
  const [exercise, setExercise] = useState("");

  const [items, setItems] = useState([
    { label: "Günde 3 defa", value: "3" },
    { label: "Günde 2 defa", value: "2" },
    { label: "Günde 1 defa", value: "1" },
    { label: "2 günde 1 defa", value: "1/2" },
    { label: "3 günde 1 defa", value: "1/3" },
  ]);
  const egzersizler = require("../helpers/exercies.json");

  const allExercises = egzersizler?.map((e,i) => {
    return {"label":e.egzersiz_adi, "value":i}
  }
    )
  const [exercises, setExercises] = useState(allExercises);


  console.log(startDate)

  const handleMarkDates = () => {
    if (startDate && duration && frequency) {
      const marked = {};
      const start = new Date(startDate);
      const end = new Date(start.getTime() + duration * 24 * 60 * 60 * 1000); // Başlangıç tarihine süreyi ekleyerek bitiş tarihini hesaplıyoruz
      const currentDate = new Date(start);

      let dayCount = 1; 

      while (currentDate <= end) {
        const dateString = currentDate.toISOString().split("T")[0];

        if (frequency === "1/3") {
          if (dayCount % 3 === 1) {
            marked[dateString] = {
              selected: true,
              disableTouchEvent: true,
              selectedColor: "orange",
            };
          }
        } else if (frequency === "1/2") {
          if (dayCount % 2 === 1) {
            marked[dateString] = {
              selected: true,
              disableTouchEvent: true,
              selectedColor: "orange",
            };
          }
        } else if (frequency === "2") {
          marked[dateString] = {
            dots: [
              { key: "dot1", color: "#023047" },
              { key: "dot2", color: "#023047" },
            ],
            selected: true,
            disableTouchEvent: true,
            selectedColor: 'orange',
          };
        } else if (frequency === "3") {
          marked[dateString] = {
            dots: [
              { key: "dot1", color: "#023047" },
              { key: "dot2", color: "#023047" },
              { key: "dot3", color: "#023047" },
            ],
            selected: true,
            disableTouchEvent: true,
            name: "deneme",
            selectedColor: 'orange',
          };
        } else {
          marked[dateString] = {
            selected: true,
            disableTouchEvent: true,
            selectedColor
            : "orange",
          };
        }

        currentDate.setDate(currentDate.getDate() + 1);
        dayCount++; // Günlük sayacı artırılır
      }

      setMarkedDates(marked);
    }
  };

  const onChangeStart = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShowStart(false);
    setStartDate(currentDate);
  };
  const onChangeEnd = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShowEnd(false);
    setEndDate(currentDate);
  };

  const showModeStart = (currentMode) => {
    setShowStart(true);
    setMode(currentMode);
  };

  const showDatepickerStart = () => {
    showModeStart("date");
  };

  return (
    <>
      <View style={{ display: "flex" }}>
      <DropDownPicker
      open={openExerciseModal}
      value={exercise}
      items={exercises}
      setOpen={setOpenExerciseModal}
      setValue={setExercise}
      setItems={setExercises}
      style={{backgroundColor:"#f0b695", borderColor:"white", marginBottom:15}}
      listMode="MODAL"
      mode="BADGE"
      searchable={true}
      placeholder="Antreman Seçin"
    />
      <TouchableOpacity style={{backgroundColor:"#f0b695", padding:10, borderRadius:10, height:50}} onPress={showDatepickerStart} >
        <Text style={{ color:"black", fontSize:15, alignItems:"center", display:"flex"}}>Egzersiz Başlama Tarihi!</Text>
      </TouchableOpacity>

        {showStart && (
        <DateTimePicker
          testID="dateTimePicker"
          value={startDate}
          mode={mode}
          is24Hour={false}
          onChange={onChangeStart}
          locale="tr-TR"
        />)
        }
      </View>
      {/* <Text>Gun Sayisi</Text> */}
      <TextInput
        // label="Email"
        value={duration}
        onChangeText={(text) => setDuration(text)}
        keyboardType="numeric"
        containerStyle="#023047"
        style={{backgroundColor:"#f0b695", marginTop:10, marginBottom:10, borderRadius:10, height:50, opacity:0.6, borderColor:"red"}}
        placeholder="Gün Sayısı"
        
      />


      <DropDownPicker
        open={open}
        value={frequency}
        items={items}
        setOpen={setOpen}
        setValue={setName}
        setItems={setItems}
        mode="BADGE"
        searchable={true}
        style={{backgroundColor:"#f0b695", borderColor:"white", opacity:0.9}}
        placeholder="Egzersiz Frekansı"
      />

      {showEnd && (
        <DateTimePicker
          testID="dateTimePicker2"
          value={endDate}
          mode={mode}
          is24Hour={true}
          onChange={onChangeEnd}
        />
      )}
      <View style={{ marginTop: 20 }}>
      <TouchableOpacity style={{backgroundColor:"#e37738", padding:10, borderRadius:10, height:50}} onPress={handleMarkDates} >
        <Text style={{textAlign:"center", color:"white", fontSize:20}}>Tarih Aralığını İşaretle</Text>
      </TouchableOpacity>
        <Calendar markedDates={markedDates} markingType="multi-dot" />
        
      </View>
    </>
  );
};

export default CalendarApp;
