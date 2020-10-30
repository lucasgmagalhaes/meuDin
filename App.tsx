import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import Home from "./Screens/Home/Home";
import { createStackNavigator } from "@react-navigation/stack";
import { AddAccount } from "./Screens/AddAccount";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        dark: false,
        colors: {
          ...DefaultTheme.colors,
          background: "#fff",
        },
      }}
    >
      <Stack.Navigator>
        <Stack.Screen
          options={{ header: () => null }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="AddAccount"
          options={{ title: "Adicionar Conta" }}
          component={AddAccount}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
