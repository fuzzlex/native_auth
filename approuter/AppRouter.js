import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

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

const AppRouter = () => {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();

  const Tab = createBottomTabNavigator();

  const HomeStack = () => (

<Stack.Navigator
          initialRouteName="StartScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
    </Stack.Navigator>
  );
  const TabHomeStack = () => (
    <Tab.Navigator>
      {/* <Tab.Screen name="Home" component={Home} /> */}
      <Tab.Screen
        name="Ana Sayfa"
        component={HomeStack}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="NotificationsScreen" component={NotificationsScreen} />
    </Tab.Navigator>
  );
  const DrawerHomeStack = () => (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={LoginScreen} />
      {/* <Drawer.Screen name="Port" component={Portfolyo} /> */}
    </Drawer.Navigator>
  );
  // screenOptions={{  header: () => <Navbar/> }}
  return (
    <>
      <NavigationContainer>
        <TabHomeStack />
      </NavigationContainer>
    </>
  );
};

export default AppRouter;
