import {
  View,
  Text,
  Image,
  useWindowDimensions,
  Dimensions,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

const windowHeight = Dimensions.get("window").height;

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState();

  const btnwarn = () => {
    console.warn("yes");
  };

  return (
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
          placeholder="Create a password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <CustomInput placeholder="Age" value={age} setValue={setAge} />
        <CustomButton text="button" onPress={btnwarn} />
      </View>
    </View>
  );
};

export default SignInScreen;
