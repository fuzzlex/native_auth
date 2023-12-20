import React, { useEffect, useState } from "react";
import { DrawerActions, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";

import { Text } from "react-native";
import Portfolyo from "../components/Portfolyo";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import NotificationsScreen from "../components/NotificationsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import StartScreen from "../pages/StartScreen";
import RegisterScreen from "../pages/RegisterScreen";
import ResetPasswordScreen from "../pages/ResetPasswordScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Button } from "react-native";


const AppRouter = () => {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();

  const Tab = createBottomTabNavigator();
  const [currentUser, setCurrentUser] = useState();
  useEffect( () => {
    AsyncStorage.getItem("TOKEN").then(token => setCurrentUser(token) )
  }, []);
  console.log(`currentUser`,currentUser);


  const LoginStack = () => (
    <Stack.Navigator
      initialRouteName="StartScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="StartScreen" component={StartScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="DrawerHomeStack" component={DrawerHomeStack} />
      <Stack.Screen
        name="ResetPasswordScreen"
        component={ResetPasswordScreen}
      />
    </Stack.Navigator>
  );
  const TabHomeStack = () => (
    <Tab.Navigator>
      <Tab.Screen
        name="Ana Sayfa"
        component={LoginStack}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );

  function CustomHeader({ navigation }) {
    return (
      <View
        style={{

          height:100
        }}
      >
      <Navbar navigation={navigation} />

      
        {/* <TouchableOpacity
          style={{ marginTop: 30 }}
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        >
          <Button title="Menu"></Button>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginTop: 30 }} onPress={() => {}}>
          <Button title="dadwa"></Button>
        </TouchableOpacity> */}
      </View>
    );
  }
  const DrawerHomeStack = () => (
    <Drawer.Navigator
      screenOptions={({ navigation }) => ({
        header: (props) => <CustomHeader {...props} navigation={navigation} />,
      })}
    >
      <Drawer.Screen name="Port" component={Portfolyo} />
    </Drawer.Navigator>
  );
  // screenOptions={{  header: () => <Navbar/> }}
  return (
    <>
      <NavigationContainer>
        {currentUser=== undefined ? <LoginStack /> : <DrawerHomeStack />}
      </NavigationContainer>
    </>
  );
};

export default AppRouter;
