import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import Pins from "../components/Pins";
import dummyData from "../dummyData";
import MansoryList from "../components/MansoryList";

const HomeScreen = () => {
  return <MansoryList dummyData={dummyData} />;
};

export default HomeScreen;
