import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import Pins from "../components/Pins";
import dummyData from "../constants/dummyData";
import MansoryList from "../components/MansoryList";
import { useUserData } from "@nhost/react";

const PopularViewScreen = () => {
  const user = useUserData();
  // console.log(user);

  return <MansoryList dummyData={dummyData} />;
};

export default PopularViewScreen;
