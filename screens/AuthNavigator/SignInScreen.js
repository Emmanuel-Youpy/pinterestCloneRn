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
      <View style={{ paddingTop: 40, alignItems: "center", padding: 20 }}>
        <Image
          source={{
            uri: "https://static-prod.adweek.com/wp-content/uploads/2021/04/Pinterest-Logo.png",
          }}
          style={{
            marginTop: 20,
            width: "70%",
            height: 100,
            maxWidth: 300,
            maxHeight: 200,
          }}
        />
        <View
          // style={{
          //   backgroundColor: "white",
          //   width: "100%",
          //   borderColor: "lightblue",
          //   borderWidth: 1,
          //   borderRadius: 5,
          //   padding: 10,
          //   marginVertical: 5,
          // }}
          style={{ alignItems: "center", width: "100%" }}
        >
          <CustomInput placeholder="Email" value={email} setValue={setEmail} />
          <CustomInput
            placeholder="Password"
            value={password}
            setValue={setPassword}
            secureTextEntry={true}
          />
          {/* <CustomInput placeholder="Age" value={age} setValue={setAge} /> */}
          <CustomButton text="button" onPress={btnwarn} />
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
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignInScreen;
