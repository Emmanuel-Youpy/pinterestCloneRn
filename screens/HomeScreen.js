import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import Pins from "../components/Pins";
import dummyData from "../constants/dummyData";
import MansoryList from "../components/MansoryList";
import { useUserData } from "@nhost/react";
import { colors } from "../constants/theme";
import { useContext } from "react";
import { ThemeContext } from "../components/ThemeContext";

const HomeScreen = () => {
  const user = useUserData();
  const { theme } = useContext(ThemeContext);
  let activeColor = colors[theme.mode];

  return (
    <View
      style={{ paddingTop: 40, backgroundColor: activeColor.backgroundColor1 }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          padding: 5,
        }}
      >
        <View
          style={{
            backgroundColor: activeColor.backgroundColor2,
            padding: 15,
            borderRadius: 30,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              color: activeColor.textColor2,
            }}
          >
            For you
          </Text>
        </View>
      </View>
      <MansoryList dummyData={dummyData} />
    </View>
  );
};

export default HomeScreen;
