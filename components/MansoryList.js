import { View, Text, ScrollView } from "react-native";
import React from "react";
import dummyData from "../dummyData";
import Pins from "./Pins";

const MansoryList = ({ dummyData }) => {
  const numRows = 2;
  return (
    <ScrollView>
      <View style={{ flexDirection: "row", padding: 10 }}>
        {Array.from(Array(numRows)).map((col, colIndex) => (
          <View style={{ flex: 1 }}>
            {dummyData
              .filter((item, index) => index % numRows === colIndex)
              .map((pin) => (
                <Pins pin={pin} key={pin.id} />
              ))}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default MansoryList;
