import { View, Text } from "react-native";
import React from "react";
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
        width: "80%",
        backgroundColor: activeColor.backgroundColor1,
        padding: 20,
        borderRadius: 30,
        marginTop: 5,
      }}
    >
      <Text style={{ color: activeColor.textColor }}>{name}</Text>
      <Text style={{ color: activeColor.textColor }}>{label}</Text>
    </View>
  );
};

export default SettingComp2;
