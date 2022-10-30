import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import MansoryList from "../components/MansoryList";
import dummyData from "../constants/dummyData";
import { Entypo } from "@expo/vector-icons";

const ProfileScreen = () => {
  return (
    <ScrollView style={{ width: "100%" }}>
      <View style={{ alignItems: "center", marginTop: 10 }}>
        <View
          style={{ flexDirection: "row", alignSelf: "flex-end", padding: 10 }}
        >
          <Entypo
            name="share-alternative"
            size={24}
            color="black"
            style={{ padding: 10 }}
          />
          <Entypo
            name="dots-three-horizontal"
            size={24}
            color="black"
            style={{ padding: 10 }}
          />
        </View>
        <Image
          style={{
            width: 200,
            aspectRatio: 1,
            borderRadius: 200,
            resizeMode: "cover",
          }}
          source={{
            uri: "https://assets.ajio.com/medias/sys_master/root/20220617/4ASV/62ac820eaeb26921af36258b/-473Wx593H-464497062-pink-MODEL.jpg",
          }}
        />
        <Text style={{ fontSize: 20, fontWeight: "bold", margin: 10 }}>
          {" "}
          ProfileScreen
        </Text>
        <Text style={{ color: "#181818" }}>123 followers | 534 following</Text>
      </View>

      <MansoryList dummyData={dummyData} />
    </ScrollView>
  );
};

export default ProfileScreen;
