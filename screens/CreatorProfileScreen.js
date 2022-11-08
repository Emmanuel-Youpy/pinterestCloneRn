import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";

const CreatorProfileScreen = ({ route, navigation }) => {
  // const [image, setImage] = useState();
  // const [profileImage, setProfileImage] = useState();
  // const [duration, setDuration] = useState();
  // const { items } = route.params;
  const data = route.params;
  // console.log(route);
  return (
    <View>
      <ImageBackground
        source={{
          uri: data.imagePass,
          // "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2015/03/chocolateWhiteDark-454384771-770x533-1.jpg",
        }}
        style={{ width: "100%", height: "100%" }}
      >
        <TouchableOpacity
          style={{ top: 60, left: 10 }}
          onPress={() => navigation.goBack()}
        >
          <MaterialIcons name="keyboard-arrow-left" size={34} color="white" />
        </TouchableOpacity>
        <View>
          <Text>{data.image}</Text>
        </View>
        <View
          style={{
            position: "absolute",
            bottom: 30,
            flexDirection: "row",
            justifyContent: "space-between",
            // backgroundColor: "green",
            width: "100%",
            padding: 10,
          }}
        >
          <View style={{ top: 270 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={{
                  uri: data.imagePass2,
                  // "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2015/03/chocolateWhiteDark-454384771-770x533-1.jpg",
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
                #CoolAnaga's
              </Text>
            </View>
            <View style={{ flexDirection: "row", padding: 5 }}>
              <View
                style={{
                  backgroundColor: "lightgrey",
                  padding: 1,
                  borderRadius: 5,
                  height: "30%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontWeight: "bold" }}>OOdid</Text>
              </View>
              <Text style={{ color: "white", paddingLeft: 5 }}>
                Another pentium * 140lb whatercolor paper
              </Text>
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
              <Text style={{ paddingTop: 5, color: "white" }}>21k</Text>
            </View>
            <View style={{ paddingBottom: 30, alignItems: "center" }}>
              <Text style={{ color: "white" }}>
                <Feather name="share" size={24} color="white" />
              </Text>
              <Text style={{ paddingTop: 5, color: "white" }}>79</Text>
            </View>
            <View style={{ paddingBottom: 30, alignItems: "center" }}>
              <Text>
                <Fontisto name="comment" size={24} color="white" />
              </Text>
              <Text style={{ paddingTop: 5, color: "white" }}>564</Text>
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
      </ImageBackground>
    </View>
  );
};

export default CreatorProfileScreen;
