import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import ProfileScreen from "./ProfileScreen";
import { Ionicons } from "@expo/vector-icons";
import CreatePinScreen from "./CreatePinScreen";
import { FontAwesome } from "@expo/vector-icons";
import NotificationScreen from "./NotificationScreen";
import SearchScreen from "./SearchScreen";

const Tab = createBottomTabNavigator();

const TabScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Search") {
            iconName = focused
              ? "ios-add-circle-sharp"
              : "ios-add-circle-outline";
          } else if (route.name === "CreatePin") {
            iconName = focused
              ? "ios-add-circle-sharp"
              : "ios-add-circle-outline";
          } else if (route.name === "Notification") {
            iconName = focused
              ? "ios-add-circle-sharp"
              : "ios-add-circle-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="CreatePin" component={CreatePinScreen} />
      <Tab.Screen name="Notification" component={NotificationScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabScreen;
