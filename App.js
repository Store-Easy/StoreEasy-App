import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import HostForm from "./App/HostForm/HostForm";
import RenteeSearch from "./App/RenteeSearch/RenteeSearch";
import UserType from "./App/UserType/UserType";

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const SearchStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#36485f",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Storage Registeration"
        options={{ title: "Storage Registeration" }}
        component={HostForm}
      />
      <Stack.Screen name="Search Rentee" component={RenteeSearch} />
      <Stack.Screen name="UserType" component={UserType} />
    </Stack.Navigator>
  );
};

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#42eff5"
      barStyle={{ backgroundColor: "#36485f" }}
    >
      <Tab.Screen
        name="Feed"
        component={HostForm}
        options={{
          tabBarLabel: "Register",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home-plus" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={RenteeSearch}
        options={{
          tabBarLabel: "New Rentals",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="home-search"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <SearchStack />
    </NavigationContainer>
  );
}
