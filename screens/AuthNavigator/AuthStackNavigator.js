import { View, Text } from "react-native";
import React from "react";
import SignInScreen from "./SignInScreen";
import SignUpScreen from "./SignUpScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ConfirmEmailScreen from "./ConfirmEmailScreen";
import ForgotPasswordScreen from "./ForgotPasswordScreen";
import ResetPasswordScreen from "./ResetPasswordScreen";
import TabScreen from "../TabScreen";
import ProfileScreen from "../ProfileScreen";
import PopularPins from "../../components/PopularPins";
import CreatorProfileScreen from "../CreatorProfileScreen";

const Stack = createNativeStackNavigator();

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{ headerShown: false, gestureEnabled: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ConfirmEmailScreen"
        component={ConfirmEmailScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ResetPasswordScreen"
        component={ResetPasswordScreen}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen
        name="Creator"
        component={CreatorProfileScreen}
        options={{ headerShown: false }}
      /> */}
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
