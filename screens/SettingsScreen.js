import { View, Text, Switch } from "react-native";
import React from "react";
import SettingComp from "../components/SettingComp";
import { useState } from "react";

const SettingsScreen = () => {
  const [isActive, setIsActive] = useState(false);
  const handleSwitch = () => {
    setIsActive((previousState) => !previousState);
  };
  return (
    <View
      style={{
        paddingTop: 40,
        // backgroundColor: "red",
      }}
    >
      <Text>User</Text>
      <View style={{ alignItems: "center" }}>
        <SettingComp label="Name" comp="Youpil" />
      </View>
      <View style={{ alignItems: "center" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "80%",
            backgroundColor: "white",
            padding: 20,
            borderRadius: 30,
            marginTop: 20,
          }}
        >
          <Text>Dark mode</Text>
          <Switch
            value={isActive}
            onValueChange={handleSwitch}
            thumbColor={isActive ? "white" : "gray"}
            ios_backgroundColor={"lightgray"}
            trackColor={{
              false: "red",
              true: "gray",
            }}
          />
        </View>
      </View>
      <View style={{ alignItems: "center" }}>
        <SettingComp label="Light" icon="lightbulb-on" isActive={false} />
        <SettingComp label="Dark" icon="weather-night" isActive={false} />
        <SettingComp label="System" icon="theme-light-dark" isActive={false} />
      </View>
    </View>
  );
};

export default SettingsScreen;
