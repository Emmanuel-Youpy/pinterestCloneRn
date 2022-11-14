import { View, Text, Image } from "react-native";
import React from "react";
import { colors } from "../constants/theme";
import { useContext } from "react";
import { ThemeContext } from "../components/ThemeContext";

const NotificationScreen = () => {
  const { theme } = useContext(ThemeContext);
  let activeColor = colors[theme.mode];
  return (
    <View
      style={{
        paddingTop: 40,
        backgroundColor: activeColor.backgroundColor1,
        height: "100%",
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          padding: 5,
        }}
      >
        <View
          style={{
            backgroundColor: "black",
            padding: 15,
            borderRadius: 30,
            backgroundColor: activeColor.backgroundColor2,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              color: activeColor.textColor2,
            }}
          >
            Notifications
          </Text>
        </View>
      </View>
      <View style={{ alignItems: "center", top: 300 }}>
        <Image
          source={{
            uri: "https://assets.materialup.com/uploads/d5bfe45e-f040-461c-b999-8ebd3d8b96b5/preview.png",
          }}
          style={{ width: 100, height: 100 }}
        />
      </View>
      <View style={{ alignItems: "center", top: 310 }}>
        <Text style={{ color: "gray", fontWeight: "bold" }}>
          No notifications yet
        </Text>
      </View>
    </View>
  );
};

export default NotificationScreen;
