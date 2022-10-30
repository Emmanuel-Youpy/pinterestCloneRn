import { View, Text, Image } from "react-native";
import React from "react";

const Walkthrough5 = () => {
  return (
    <View
      style={{ alignItems: "center", height: 370, backgroundColor: "black" }}
    >
      <Image
        source={{
          uri: "https://images.immediate.co.uk/production/volatile/sites/3/2022/05/710261S6Ep1Hunted-S6-Fugitives-6ee30d1.jpg?quality=90&resize=620,413",
        }}
        style={{
          width: "100%",
          height: "100%",
          resizeMode: "cover",
          opacity: 0.5,
        }}
      />
    </View>
  );
};

export default Walkthrough5;
