import { View, Text, ScrollView, useWindowDimensions } from "react-native";
import React, { useState } from "react";
import dummyData from "../constants/dummyData";
import Pins from "./Pins";
import dummyData2 from "../constants/dummyData2";
import Pins2 from "./Pins2";

const MansoryList2 = ({ dummyData }) => {
  //   const [numColumns, setNumColumns] = useState(2);

  //   const numColumns = width < 500 ? 2 : 3;
  // const numColumns = Math.ceil(width / 10);

  const numColumns = 2;

  const width = useWindowDimensions().width;

  //   console.log(width);
  return (
    <ScrollView>
      <View style={{ flexDirection: "row", padding: 10 }}>
        {Array.from(Array(numColumns)).map((col, colIndex) => (
          <View style={{ flex: 1 }} key={`column_${colIndex}`}>
            {dummyData2
              .filter((item, index) => index % numColumns === colIndex)
              .map((pin) => (
                <Pins2 pin={pin} key={pin.id} />
              ))}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default MansoryList2;
