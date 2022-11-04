import { View, Text, ImageBackground, Image } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

const CreatorProfileScreen = () => {
  return (
    <View>
      <ImageBackground
        source={{
          uri: "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2015/03/chocolateWhiteDark-454384771-770x533-1.jpg",
        }}
        style={{ width: "100%", height: "100%" }}
      >
        <View
          style={{
            position: "absolute",
            bottom: 110,
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "green",
            width: "100%",
            padding: 5,
          }}
        >
          <View style={{ top: 270 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={{
                  uri: "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2015/03/chocolateWhiteDark-454384771-770x533-1.jpg",
                }}
                style={{
                  width: 40,
                  height: 40,
                  resizeMode: "cover",
                  borderRadius: 20,
                }}
              />
              <Text
                style={{ fontWeight: "600", color: "white", paddingLeft: 8 }}
              >
                DecorHouse
              </Text>
            </View>
            <View style={{}}>
              <Text>Another</Text>
            </View>
          </View>
          <View
          // style={{ paddingBottom: 30, bottom: 30 }}
          >
            <Entypo
              name="dots-three-horizontal"
              size={24}
              color="white"
              style={{ paddingBottom: 30 }}
            />
            <View
              style={{ paddingBottom: 30, alignItems: "center", padding: 5 }}
            >
              <Text>
                <Entypo
                  name="heart-outlined"
                  size={24}
                  color="white"
                  style={{ fontWeight: 700 }}
                />
              </Text>
              <Text style={{ paddingTop: 5 }}>21k</Text>
            </View>
            <View style={{ paddingBottom: 30, alignItems: "center" }}>
              <Text style={{ color: "white" }}>
                <Feather name="share" size={24} color="white" />
              </Text>
              <Text style={{ paddingTop: 5 }}>79</Text>
            </View>
            <View style={{ paddingBottom: 30, alignItems: "center" }}>
              <Text>
                <Fontisto name="comment" size={24} color="white" />
              </Text>
              <Text style={{ paddingTop: 5 }}>564</Text>
            </View>
            <View
              style={{
                paddingBottom: 30,
                alignItems: "center",
                // width: 20,
                // height: 20,
                // borderRadius: 10,
                // backgroundColor: "red",
              }}
            >
              <Fontisto name="bookmark" size={24} color="white" />
            </View>
          </View>
        </View>
        <Text style={{ color: "white" }}>CreatorProfileScreen</Text>
      </ImageBackground>
    </View>
  );
};

export default CreatorProfileScreen;
