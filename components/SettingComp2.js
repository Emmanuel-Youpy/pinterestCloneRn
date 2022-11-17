import { View, Text } from "react-native";
import React from "react";
import { colors } from "../constants/theme";

import { useContext } from "react";
import { ThemeContext } from "../components/ThemeContext";

const SettingComp2 = ({ name, label }) => {
  const { theme } = useContext(ThemeContext);
  let activeColor = colors[theme.mode];

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        width: "95%",
        backgroundColor: activeColor.backgroundColor1,
        padding: 20,
        borderRadius: 20,
        marginTop: 5,
        borderColor: "lightgray",
        borderWidth: 0.5,
      }}
    >
      <Text style={{ color: activeColor.textColor }}>{name}</Text>
      <Text style={{ color: "gray" }}>{label}</Text>
    </View>
  );
};

export default SettingComp2;
