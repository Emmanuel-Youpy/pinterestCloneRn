import {
  ImageBackground,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const PopularPins = ({ image, title, navigation, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        width: "100%",
        borderRadius: 20,
        arginHorizontal: "auto",
        width: "50%",
        padding: 3,
        borderRadius: 20,
      }}
      onPress={onPress}
    >
      <View>
        <ImageBackground
          source={{
            uri: image,
          }}
          resizeMode="cover"
          style={styles.image}
        >
          <View style={styles.col2}></View>
        </ImageBackground>

        <Text
          style={{
            textAlign: "center",
            color: "white",
            opacity: 1,
            fontSize: 18,
            fontWeight: "600",
            position: "absolute",
            top: 55,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularPins;

const styles = StyleSheet.create({
  app: {
    // flex: 2, // the number of columns you want to devide the screen into
    marginHorizontal: "auto",
    width: "50%",
    padding: 3,
    borderRadius: 20,
  },
  image: {
    justifyContent: "center",
    borderRadius: 20,
    overflow: "hidden",
  },
  col2: {
    backgroundColor: "black",
    opacity: 0.4,
    borderColor: "#fff",
    borderWidth: 1,
    flex: 2,
    padding: 60,
    borderRadius: 20,
    width: "100%",
  },

  "2col": {
    backgroundColor: "black",
    opacity: 0.4,
    borderColor: "#fff",
    borderWidth: 1,
    flex: 2,
    padding: 50,
    borderRadius: 20,
    width: "100%",
  },
});
