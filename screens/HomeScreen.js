import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import Pins from "../components/Pins";

const HomeScreen = () => {
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          padding: 10,
        }}
      >
        {/* Pins */}
        <Pins
          title="okay"
          image="https://threadcurve.com/wp-content/uploads/2020/12/midi-dress-apr092021_1.jpg"
        />
        <Pins
          title="Yeah"
          image="https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/7.jpeg"
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
