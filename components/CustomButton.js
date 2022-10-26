import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const CustomButton = ({ onPress, text }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: "red",
        width: "80%",
        padding: 15,
        marginVertical: 5,
        alignItems: "center",
        borderRadius: 15,
      }}
    >
      <Text style={{ color: "white" }}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({});
