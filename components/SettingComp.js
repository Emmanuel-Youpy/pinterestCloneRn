import { View, Text } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../constants/theme";
import { useContext } from "react";
import { ThemeContext } from "../components/ThemeContext";
import { TouchableOpacity } from "react-native-gesture-handler";

const SettingComp = ({ label, isActive, icon, onPress }) => {
  const { theme } = useContext(ThemeContext);
  let activeColor = colors[theme.mode];
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        width: "95%",
        // backgroundColor: "white",
        padding: 20,
        borderRadius: 20,
        marginTop: 5,
        // backgroundColor: activeColor.backgroundColor3,
        borderColor: "lightgrey",
        borderWidth: 0.5,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <MaterialCommunityIcons
          name={icon}
          size={23}
          color={activeColor.textColor}
        />
        <Text style={{ paddingLeft: 10, color: activeColor.textColor }}>
          {label}
        </Text>
      </View>
      <TouchableOpacity onPress={onPress}>
        <MaterialCommunityIcons
          name={
            isActive
              ? "checkbox-marked-circle"
              : "checkbox-blank-circle-outline"
          }
          size={23}
          color={isActive ? "skyblue" : "lightgray"}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SettingComp;
