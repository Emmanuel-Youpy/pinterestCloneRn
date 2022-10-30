import { View, Text, Image } from "react-native";
import React from "react";

const Walkthrough1 = () => {
  return (
    <View
      style={{ alignItems: "center", height: 400, backgroundColor: "yellow" }}
    >
      <Image
        source={{
          uri: "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg",
        }}
        style={{ width: "100%", height: "100%" }}
      />
      <Text>Walkthrough1</Text>
    </View>
  );
};

export default Walkthrough1;
