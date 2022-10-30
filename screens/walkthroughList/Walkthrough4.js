import { View, Text, Image } from "react-native";
import React from "react";

const Walkthrough4 = () => {
  return (
    <View
      style={{ alignItems: "center", height: 370, backgroundColor: "black" }}
    >
      <Image
        source={{
          uri: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F34%2F2011%2F02%2F19000220%2Fwoman-knitting-getty-763267111.jpg",
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

export default Walkthrough4;
