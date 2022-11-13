import { View, Text } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const SettingComp = ({ label, isActive, icon }) => {
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
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <MaterialCommunityIcons name={icon} size={23} color="gray" />
        <Text style={{ paddingLeft: 10 }}>{label}</Text>
      </View>
      <MaterialCommunityIcons
        name={
          isActive ? "checkbox-marked-circle" : "checkbox-blank-circle-outline"
        }
        size={23}
        color={isActive ? "gray" : "red"}
      />
    </View>
  );
};

export default SettingComp;
