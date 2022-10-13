import { View, Text, ScrollView } from "react-native";
import React from "react";
import dummyData from "../dummyData";
import Pins from "./Pins";

const MansoryList = ({ dummyData }) => {
  return (
    <ScrollView>
      <View style={{ flexDirection: "row", padding: 10 }}>
        {/* Pins */}
        {/* 1st colummn */}
        <View style={{ flex: 1 }}>
          {dummyData
            .filter((item, index) => index % 2 === 0)
            .map((pin) => (
              <Pins pin={pin} key={pin.id} />
            ))}
        </View>
        {/* 2nd column */}
        <View style={{ flex: 1 }}>
          {dummyData
            .filter((item, index) => index % 2 === 1)
            .map((pin) => (
              <Pins pin={pin} key={pin.id} />
            ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default MansoryList;
