import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import ProfileScreen from "./ProfileScreen";
import { Ionicons } from "@expo/vector-icons";
import CreatePinScreen from "./CreatePinScreen";
import NotificationScreen from "./NotificationScreen";
import SearchScreen from "./SearchScreen";
import CreatorProfileScreen from "./CreatorProfileScreen";
import { colors } from "../constants/theme";
import { useContext } from "react";
import { ThemeContext } from "../components/ThemeContext";

const Tab = createBottomTabNavigator();

const TabScreen = () => {
  const { theme } = useContext(ThemeContext);
  let activeColor = colors[theme.mode];
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: { backgroundColor: activeColor.backgroundColor1 },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Search") {
            iconName = focused ? "md-search-sharp" : "md-search-outline";
          } else if (route.name === "CreatePin") {
            iconName = focused ? "md-add-sharp" : "md-add-outline";
          } else if (route.name === "Notification") {
            iconName = focused
              ? "ios-notifications-sharp"
              : "ios-notifications-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: activeColor.tint,
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false, tabBarShowLabel: false }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{ headerShown: false, tabBarShowLabel: false }}
      />
      <Tab.Screen
        name="CreatePin"
        component={CreatePinScreen}
        options={{ headerShown: false, tabBarShowLabel: false }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{ headerShown: false, tabBarShowLabel: false }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false, tabBarShowLabel: false }}
      />
    </Tab.Navigator>
  );
};

export default TabScreen;
