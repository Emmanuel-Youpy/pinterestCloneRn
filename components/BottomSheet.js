import React, { useRef } from "react";
import { View, Button, Text, TouchableOpacity, Alert } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../constants/theme";
import { useContext } from "react";
import { ThemeContext } from "../components/ThemeContext";

export default function BottomSheet() {
  const { theme } = useContext(ThemeContext);
  let activeColor = colors[theme.mode];
  const navigation = useNavigation();

  const createTwoButtonAlert = () =>
    Alert.alert(
      "oops! ",
      "To choose a picture, please give this app access to your photos in phone settings",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "OK",
        },
      ]
    );
  const createOneButtonAlert = () =>
    Alert.alert(" ", "Link copied", [
      {
        text: "Ok",
      },
    ]);
  function comp() {
    return (
      <View
        style={{
          alignContent: "center",
          //   justifyContent: "center",
          backgroundColor: activeColor.backgroundColor1,
          padding: 20,
          height: "100%",
        }}
      >
        <Text
          style={{
            paddingBottom: 10,
            fontSize: 15,
            color: activeColor.textColor,
          }}
        >
          Profile
        </Text>
        <Text
          style={{
            paddingBottom: 10,
            fontSize: 20,
            marginBottom: 10,
            fontWeight: "bold",
            color: activeColor.textColor,
          }}
          onPress={createTwoButtonAlert}
        >
          Add Cover Image
        </Text>

        <Text
          style={{
            paddingBottom: 10,
            fontSize: 20,
            marginBottom: 10,
            fontWeight: "bold",
            color: activeColor.textColor,
          }}
          onPress={createOneButtonAlert}
        >
          Copy profile link
        </Text>
        <Text
          style={{
            paddingBottom: 10,
            fontSize: 20,
            marginBottom: 10,
            fontWeight: "bold",
            color: activeColor.textColor,
          }}
          onPress={() => navigation.navigate("SignIn")}
        >
          Log out
        </Text>
      </View>
    );
  }
  const refRBSheet = useRef();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity onPress={() => refRBSheet.current.open()}>
        <View>
          <Entypo
            name="dots-three-horizontal"
            size={24}
            color={activeColor.textColor}
            style={{ padding: 10 }}
          />
        </View>
      </TouchableOpacity>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        animationType="fade"
        height={300}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent",
          },
          draggableIcon: {
            backgroundColor: "gray",
          },
        }}
      >
        {comp()}
      </RBSheet>
    </View>
  );
}
