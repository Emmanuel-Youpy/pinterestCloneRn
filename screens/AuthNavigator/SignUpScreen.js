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
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { ThemeContext } from "../../components/ThemeContext";

import { useContext } from "react";
import { colors } from "../../constants/theme";

const windowHeight = Dimensions.get("window").height;

const SignInScreen = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);
  let activeColor = colors[theme.mode];
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState();

  const btnwarn = () => {
    console.warn("yes");
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: activeColor.backgroundColor1 }}
    >
      <View style={{ paddingTop: 90, alignItems: "center" }}>
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
          <Text style={{ fontSize: "30", fontWeight: "400" }}>
            Welcome to Pinterest
          </Text>
          <Text style={{ textAlign: "center" }}>Find new ideas to try</Text>
        </View>
        <View style={{ alignItems: "center", width: "100%" }}>
          <View style={{ width: "80%" }}>
            <Text style={{ fontSize: 16, color: "gray" }}>Email</Text>
          </View>
          <CustomInput placeholder="Email" value={email} setValue={setEmail} />
          <View style={{ width: "80%", paddingTop: 5 }}>
            <Text style={{ fontSize: 16, color: "gray", paddingTop: 5 }}>
              Password
            </Text>
          </View>
          <CustomInput
            placeholder="Create a password"
            value={password}
            setValue={setPassword}
            secureTextEntry={true}
          />
          <View style={{ width: "80%", paddingTop: 5 }}>
            <Text style={{ fontSize: 16, color: "gray", paddingTop: 5 }}>
              Age
            </Text>
          </View>
          <CustomInput placeholder="Age" value={age} setValue={setAge} />
          <CustomButton
            text="Continue"
            onPress={() => navigation.navigate("ConfirmEmailScreen")}
          />
          {/* <CustomButton text="Socials" onPress={btnwarn} type="TERITARY" /> */}
          <Text>Or</Text>
          <CustomButton
            text="Continue with Facebook"
            onPress={btnwarn}
            bgColor="skyblue"
          />
          <CustomButton
            text="Continue with Google"
            onPress={btnwarn}
            bgColor="lightgray"
          />
          <CustomButton
            text="Continue with Apple"
            onPress={btnwarn}
            bgColor="pink"
          />
          <View style={{ width: "80%", alignItems: "center" }}>
            <Text style={{ color: activeColor.textColor }}>
              <Text style={{ color: "gray", textAlign: "center" }}>
                By Continuing, you agree to Pinterest's{" "}
              </Text>
              Terms of Service, Privacy Policy
            </Text>
            <View
              style={{
                flexDirection: "row",
                paddingTop: 10,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontWeight: "500",
                  textAlign: "center",
                  color: activeColor.textColor,
                }}
              >
                Already a menber?
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("SignIn")}
                style={{ textAlign: "center" }}
              >
                <Text style={{ color: activeColor.textColor }}> Log In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignInScreen;
