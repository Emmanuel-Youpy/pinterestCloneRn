import { View, Text, Image } from "react-native";
import React from "react";

const Walkthrough3 = () => {
  return (
    <View
      style={{ alignItems: "center", height: 370, backgroundColor: "black" }}
    >
      <Image
        source={{
          uri: "https://img.freepik.com/premium-vector/slam-dunk-jump-splash-basketball-player_9245-134.jpg?w=2000",
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

export default Walkthrough3;
