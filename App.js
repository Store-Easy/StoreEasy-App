import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import HostForm from "./App/HostForm/HostForm";
import RenteeSearch from "./App/RenteeSearch/RenteeSearch";
import UserType from "./App/UserType/UserType";
import SearchList from "./App/SearchList/SearchList";
import PropertyCard from "./App/PropertyCard/PropertyCard";

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
          fontWeight: "900",
        },
      }}
    >
      <Stack.Screen
        name="UserType"
        options={{ title: "Welcome to StoreEasy" }}
        component={UserType}
      />
      <Stack.Screen
        name="StorageRegisteration"
        options={{ title: "Storage Registeration" }}
        component={HostForm}
      />
      <Stack.Screen
        name="SearchRentee"
        options={{ title: "Search Storage" }}
        component={RenteeSearch}
      />
      <Stack.Screen
        name="SearchList"
        options={{ title: "Search List" }}
        component={SearchList}
      />
      <Stack.Screen
        name="PropertyCard"
        options={{ title: "Property Card" }}
        component={PropertyCard}
      />
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
      <Tab.Screen
        name="Search List"
        component={SearchList}
        options={{
          tabBarLabel: "Search List",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home-plus" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Property Card"
        component={PropertyCard}
        options={{
          tabBarLabel: "Property Card",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home-plus" color={color} size={26} />
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
      {/* <Tabs /> */}
    </NavigationContainer>
  );
}
