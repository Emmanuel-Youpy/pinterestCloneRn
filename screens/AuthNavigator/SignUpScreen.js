import {
  View,
  Text,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";

const windowHeight = Dimensions.get("window").height;

const SignUpScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "center",
        paddingTop: 40,
      }}
    >
      <View>
        <Text style={{ fontSize: 28 }}>SignUpScreen</Text>
        <Text>Find new ideas to try</Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
          <Text>SIgin In</Text>
        </TouchableOpacity>
      </View>
      {/* Header */}
    </View>
  );
};

export default SignUpScreen;
