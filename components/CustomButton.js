import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const CustomButton = ({
  onPress,
  text,
  type = "PRIMARY",
  bgColor,
  fgColor,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? { backgroundColor: bgColor } : {},
      ]}
    >
      <Text
        style={[
          styles.txt,
          styles[`txt_${type}`],
          fgColor ? { color: fgColor } : {},
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    width: "80%",
    padding: 15,
    marginVertical: 5,
    alignItems: "center",
    borderRadius: 15,
  },
  container_PRIMARY: {
    backgroundColor: "red",
  },
  txt_SECONDARY: {
    color: "gray",
  },
  container_TERITARY: { borderWidth: 1, borderColor: "red" },
  txt: {
    color: "white",
  },
  txt_TERITARY: {
    color: "gray",
  },
});
