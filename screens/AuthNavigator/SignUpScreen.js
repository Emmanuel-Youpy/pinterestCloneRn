import { View, Text, Dimensions, ImageBackground } from "react-native";
import React from "react";

const windowHeight = Dimensions.get("window").height;

const SignUpScreen = () => {
  function renderHeader() {
    return (
      <View style={{ height: windowHeight > 700 ? "65%" : "60%" }}>
        <ImageBackground
          source={{
            uri: "https://i.pinimg.com/736x/d8/09/a6/d809a6ecf9292e352d635b0481bb3070.jpg",
          }}
          style={{ flex: 1, justifyContent: "flex-end" }}
          resizeMode="cover"
        ></ImageBackground>
      </View>
    );
  }
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <Text style={{ color: "white" }}>SignUpScreen</Text>
      {/* Header */}
      {renderHeader()}
    </View>
  );
};

export default SignUpScreen;
