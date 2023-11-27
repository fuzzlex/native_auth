import { View, Text } from "react-native";
import React from "react";

import { Avatar } from '@rneui/themed';
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Navbar({navigation}) {
  return (
    <View style={{position:`relative`,margin:5}}>
      <Avatar
    size={32}
    rounded
    icon={{ name: "bars", type: "font-awesome" }}
    containerStyle={{ backgroundColor: "#9700b9", marginTop:25, marginLeft:15}}
    onPress={() => navigation.navigate(`Port`)}
  />

      

    </View>
  );
}
