import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import Pins from "../components/Pins";
import dummyData from "../constants/dummyData";
import { useUserData } from "@nhost/react";
import MansoryList2 from "../components/MansoryList2";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "../constants/theme";

const PopularViewScreen = () => {
  const theme = { mode: "dark" };
  let activeColor = colors[theme.mode];
  const user = useUserData();
  // console.log(user);

  return (
    <View
      style={{ backgroundColor: activeColor.backgroundColor1, paddingTop: 30 }}
    >
      {/* <TouchableOpacity style={{ top: 30 }} onPress={() => navigation.goBack()}>
        <MaterialIcons name="keyboard-arrow-left" size={34} color="red" />
      </TouchableOpacity> */}
      <MansoryList2 dummyData={dummyData} />
    </View>
  );
};

export default PopularViewScreen;
