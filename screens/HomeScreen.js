import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import Pins from "../components/Pins";
import dummyData from "../constants/dummyData";
import MansoryList from "../components/MansoryList";
import { useUserData } from "@nhost/react";

const HomeScreen = () => {
  const user = useUserData();
  // console.log(user);

  return (
    <View style={{ paddingTop: 40 }}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          padding: 5,
        }}
      >
        <View
          style={{ backgroundColor: "black", padding: 15, borderRadius: 30 }}
        >
          <Text
            style={{ textAlign: "center", fontWeight: "bold", color: "white" }}
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
