import React, { useState } from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import { Calendar, LocaleConfig,Agenda  } from 'react-native-calendars';
import { Input } from '@rneui/base';
import DropDownPicker from 'react-native-dropdown-picker';

LocaleConfig.locales['tr'] = {
  monthNames: [
    'Ocak',
    'Şubat',
    'Mart',
    'Nisan',
    'Mayıs',
    'Haziran',
    'Temmuz',
    'Ağustos',
    'Eylül',
    'Ekim',
    'Kasım',
    'Aralık',
  ],
  monthNamesShort: [
    'Oca',
    'Şub',
    'Mar',
    'Nis',
    'May',
    'Haz',
    'Tem',
    'Ağu',
    'Eyl',
    'Eki',
    'Kas',
    'Ara',
  ],
  dayNames: [
    'Pazar',
    'Pazartesi',
    'Salı',
    'Çarşamba',
    'Perşembe',
    'Cuma',
    'Cumartesi',
  ],
  dayNamesShort: ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt'],
  today: 'Bugün',
};
LocaleConfig.defaultLocale = 'tr';


 const CalendarApp = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [showStart, setShowStart] = useState(false);
  const [showEnd, setShowEnd] = useState(false);
  const [markedDates, setMarkedDates] = useState({});
  const [duration, setDuration] = useState("");
  const [open, setOpen] = useState(false);
  const [frequency, setName] = useState("");
  const [items, setItems] = useState([
    {label:'gunde 3 defa', value:'3'},
    {label:'gunde 2 defa', value:'2'},
    {label:'gunde 1 defa', value:'1'},
    {label:'2 gunde 1 defa', value:'1/2'},
    {label:'3 gunde 1 defa', value:'1/3'},
]);
// console.log(frequen

  const handleMarkDates = () => {
    if (startDate && duration && frequency) {
      const marked = {};
      const start = new Date(startDate);
      const end = new Date(start.getTime() + duration * 24 * 60 * 60 * 1000); // Başlangıç tarihine süreyi ekleyerek bitiş tarihini hesaplıyoruz
      const currentDate = new Date(start);
  
      let dayCount = 1; // Günlük sayacı başlatıyoruz
  
      while (currentDate <= end) {
        const dateString = currentDate.toISOString().split('T')[0];
        
        if (frequency === "1/3") {
          // Frekans değeri 1/2 ise her iki günde bir işaretleme yapılır
          if (dayCount % 3 === 1) {
            marked[dateString] = { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' };
          }
        } 
        else if (frequency === "1/2") {
          // Frekans değeri 1/2 ise her iki günde bir işaretleme yapılır
          if (dayCount % 2 === 1) {
            marked[dateString] = { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' };
          }
        } 
        else if (frequency === "2") {
         
          marked[dateString] = {
            dots: [
              { key: 'dot1', color: 'green' },
              { key: 'dot2', color: 'white' }
            ],
            selected: true,
            disableTouchEvent: true,
            // selectedColor: 'orangered',
          };
        } 
        else if (frequency === "3") {
         
          marked[dateString] = {
            dots: [
              { key: 'dot1', color: 'white' },
              { key: 'dot2', color: 'white' },
              { key: 'dot3', color: 'white' },
            ],
            selected: true,
            disableTouchEvent: true,
            name:"deneme"
            // selectedColor: 'orangered',
          };
        } 
        else {
          // Diğer durumda her gün işaretleme yapılır
          marked[dateString] = { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' };
        }
  
        currentDate.setDate(currentDate.getDate() + 1);
        dayCount++; // Günlük sayacı artırılır
      }
  
      setMarkedDates(marked);
    }
  };
  console.log(markedDates)
  

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
  const showModeEnd = (currentMode) => {
    setShowEnd(true);
    setMode(currentMode);
  };

  const showDatepickerStart = () => {
    showModeStart('date');
  };
  const showDatepickerEnd = () => {
    showModeEnd('date');
  };



  return (
    <>
      <Button onPress={showDatepickerStart} title="Baslangic tarihi!" />
      <Text>Gun Sayisi</Text>
      <Input
      // label="Email"
      value={duration}
      onChangeText={text => setDuration(text)}
      keyboardType="numeric"
    />
      {/* <Button onPress={showDatepickerEnd} title="Bitis tarihi!" /> */}
      {/* <Text>selected: {date.toLocaleString()}</Text> */}
      <DropDownPicker
      open={open}
      value={frequency}
      items={items}
      setOpen={setOpen}
      setValue={setName}
      setItems={setItems}
      // style={{marginTop:25}}
      listMode="MODAL"
      mode="BADGE"
      searchable={true}
    />
      {showStart && (
        <DateTimePicker
          testID="dateTimePicker"
          value={startDate}
          mode={mode}
          is24Hour={false}
          onChange={onChangeStart}
        />
      )}
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
      <Button title="Tarih Aralığını İşaretle" onPress={handleMarkDates} />
        <Calendar markedDates={markedDates} markingType="multi-dot"
 />
       <Agenda
        // selected="2022-12-01"
        items={markedDates}
        renderItem={(item, isFirst) => (
          <TouchableOpacity >
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

      </View>
      </>
  );
};

export default CalendarApp;