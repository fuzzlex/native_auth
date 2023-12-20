import { View, Text } from "react-native";
import React from "react";

import { Avatar } from '@rneui/themed';
import { TouchableOpacity } from "react-native-gesture-handler";
import { DrawerActions } from "@react-navigation/native";

export default function Navbar({navigation}) {
  return (
    <View style={{display:"flex",flexDirection:`row`,justifyContent:`space-between`,margin:9}}>
      <Avatar
    size={45}
    rounded
    icon={{ name: "bars", type: "font-awesome" }}
    containerStyle={{ backgroundColor: "#9700b9", marginTop:25, marginLeft:5}}
    onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
  />
  <Text style={{fontSize:50,marginTop:30}}>ROMATEM</Text>
      <Avatar
    size={45}
    rounded
    icon={{ name: "user", type: "font-awesome" }}
    containerStyle={{ backgroundColor: "#9700b9", marginTop:25, marginLeft:5}}
    onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
  />

      

    </View>
  );
}
