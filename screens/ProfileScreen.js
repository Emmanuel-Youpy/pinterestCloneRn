import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Button,
  Alert,
} from "react-native";
import React, { useRef } from "react";
import MansoryList from "../components/MansoryList";
import dummyData from "../constants/dummyData";
import BottomSheet from "../components/BottomSheet";
import { Entypo } from "@expo/vector-icons";

const ProfileScreen = () => {
  const createOneButtonAlert = () =>
    Alert.alert(" Oops!", "Share option not available", [
      {
        text: "Ok",
      },
    ]);
  return (
    <ScrollView style={{ width: "100%" }}>
      <View style={{ alignItems: "center", marginTop: 10, paddingTop: 20 }}>
        <View
          style={{ flexDirection: "row", alignSelf: "flex-end", padding: 10 }}
        >
          <TouchableOpacity onPress={createOneButtonAlert}>
            <Entypo
              name="share-alternative"
              size={24}
              color="black"
              style={{ padding: 10 }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <BottomSheet />
          </TouchableOpacity>
        </View>
        <Image
          style={{
            width: 200,
            aspectRatio: 1,
            borderRadius: 200,
            resizeMode: "cover",
          }}
          source={{
            uri: "https://i.pinimg.com/736x/25/78/61/25786134576ce0344893b33a051160b1.jpg",
          }}
        />
        <Text style={{ fontSize: 20, fontWeight: "bold", margin: 10 }}>
          {" "}
          Berlin Youpil
        </Text>
        <Text style={{ color: "#181818" }}>123 followers | 534 following</Text>
      </View>

      <MansoryList dummyData={dummyData} />
    </ScrollView>
  );
};

export default ProfileScreen;
