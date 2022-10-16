import { View, Text, ScrollView, useWindowDimensions } from "react-native";
import React, { useState } from "react";
import dummyData from "../dummyData";
import Pins from "./Pins";

const MansoryList = ({ dummyData }) => {
  //   const [numColumns, setNumColumns] = useState(2);

  //   const numColumns = width < 500 ? 2 : 3;
  // const numColumns = Math.ceil(width / 10);

  const numColumns = 2;

  const width = useWindowDimensions().width;

  console.log(width);
  return (
    <ScrollView>
      <View style={{ flexDirection: "row", padding: 10 }}>
        {Array.from(Array(numColumns)).map((col, colIndex) => (
          <View style={{ flex: 1 }}>
            {dummyData
              .filter((item, index) => index % numColumns === colIndex)
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
