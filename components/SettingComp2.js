import { View, Text } from "react-native";
import React from "react";

const SettingComp2 = ({ name, label }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        width: "80%",
        backgroundColor: "white",
        padding: 20,
        borderRadius: 30,
        marginTop: 5,
      }}
    >
      <Text>{name}</Text>
      <Text>label</Text>
    </View>
  );
};

export default SettingComp2;
