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

const windowHeight = Dimensions.get("window").height;

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState();

  const btnwarn = () => {
    console.warn("yes");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ paddingTop: 90, alignItems: "center", padding: 20 }}>
        <Image
          source={{
            uri: "https://i.pinimg.com/originals/98/a6/de/98a6de54dc27442a3c8375ab303c6e42.jpg",
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
            Log in to see more
          </Text>
          <Text style={{ textAlign: "center" }}>
            Access Pinterest best ideas
          </Text>
        </View>
        <View style={{ alignItems: "center", width: "100%" }}>
          <CustomInput placeholder="Email" value={email} setValue={setEmail} />
          <CustomInput
            placeholder="Password"
            value={password}
            setValue={setPassword}
            secureTextEntry={true}
          />
          <CustomButton
            text="Sign In"
            onPress={() => navigation.navigate("Tabs")}
          />
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
            <Text>
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
              <Text style={{ fontWeight: "500", textAlign: "center" }}>
                Don't have an account?
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("SignUp")}
                style={{ textAlign: "center" }}
              >
                <Text> Sign Up</Text>
              </TouchableOpacity>
            </View>
            <Text
              onPress={() => navigation.navigate("ForgotPasswordScreen")}
              style={{ paddingTop: 20 }}
            >
              Forgot your password?
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignInScreen;
