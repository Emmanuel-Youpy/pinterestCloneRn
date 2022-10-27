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

const ConfirmEmailScreen = ({ navigation }) => {
  const [code, setCode] = useState("");

  const btnwarn = () => {
    console.warn("yes");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ paddingTop: 40, alignItems: "center", padding: 20 }}>
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
            Confirm your email
          </Text>
        </View>
        <View style={{ alignItems: "center", width: "100%" }}>
          <CustomInput
            placeholder="Enter confirmation code"
            value={code}
            setValue={setCode}
          />

          <CustomButton
            text="Confirm"
            onPress={() => navigation.navigate("Tabs")}
          />
          <CustomButton text="Resend Code" onPress={btnwarn} type="TERITARY" />
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

export default ConfirmEmailScreen;
