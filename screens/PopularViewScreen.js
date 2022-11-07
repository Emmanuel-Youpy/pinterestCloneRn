import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import Pins from "../components/Pins";
import dummyData from "../constants/dummyData";
import { useUserData } from "@nhost/react";
import MansoryList2 from "../components/MansoryList2";
import { MaterialIcons } from "@expo/vector-icons";

const PopularViewScreen = () => {
  const user = useUserData();
  // console.log(user);

  return (
    <View>
      {/* <TouchableOpacity style={{ top: 30 }} onPress={() => navigation.goBack()}>
        <MaterialIcons name="keyboard-arrow-left" size={34} color="red" />
      </TouchableOpacity> */}
      <MansoryList2 dummyData={dummyData} />
    </View>
  );
};

export default PopularViewScreen;
