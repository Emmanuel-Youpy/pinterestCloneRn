import { View, Text, Image } from "react-native";
import React from "react";

const NotificationScreen = () => {
  return (
    <View style={{ paddingTop: 40 }}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          padding: 5,
        }}
      >
        <View
          style={{ backgroundColor: "black", padding: 15, borderRadius: 30 }}
        >
          <Text
            style={{ textAlign: "center", fontWeight: "bold", color: "white" }}
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
