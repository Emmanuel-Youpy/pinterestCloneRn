import {
  View,
  Text,
  Image,
  useWindowDimensions,
  Dimensions,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import { ThemeContext } from "../../components/ThemeContext";
import { useContext } from "react";
import { colors } from "../../constants/theme";

const windowHeight = Dimensions.get("window").height;

const ForgotPasswordScreen = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);
  let activeColor = colors[theme.mode];

  const [userName, setUserName] = useState("");

  const btnwarn = () => {
    console.warn("yes");
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: activeColor.backgroundColor1 }}
    >
      <View style={{ paddingTop: 40, alignItems: "center", padding: 20 }}>
        <Image
          source={{
            uri: "https://www.freepnglogos.com/uploads/pinterest-logo-emblem-png-11.png",
          }}
          style={{
            marginTop: 20,
            width: 70,
            height: 70,
            maxWidth: 300,
            maxHeight: 200,
          }}
        />
        <View style={{ padding: 15 }}>
          <Text
            style={{ fontSize: "30", fontWeight: "400", textAlign: "center" }}
          >
            Reset password
          </Text>
        </View>
        <View style={{ alignItems: "center", width: "100%" }}>
          <View style={{ width: "80%" }}>
            <Text style={{ fontSize: 16, color: "gray", paddingBottom: 5 }}>
              Enter your username
            </Text>
          </View>
          <CustomInput
            placeholder="Enter your username"
            value={userName}
            setValue={setUserName}
          />

          <CustomButton
            text="Send"
            onPress={() => navigation.navigate("ResetPasswordScreen")}
          />
          <CustomButton
            text="Back to Sign in"
            onPress={() => navigation.navigate("SignIn")}
            type="SECONDARY"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default ForgotPasswordScreen;
