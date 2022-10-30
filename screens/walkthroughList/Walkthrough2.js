import { View, Text, Image } from "react-native";
import React from "react";

const Walkthrough2 = () => {
  return (
    <View
      style={{ alignItems: "center", height: 370, backgroundColor: "black" }}
    >
      <Image
        source={{
          uri: "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2015/03/chocolateWhiteDark-454384771-770x533-1.jpg",
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

export default Walkthrough2;
