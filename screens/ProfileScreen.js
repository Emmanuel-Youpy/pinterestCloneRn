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
import { useNavigation } from "@react-navigation/native";

// import { connect } from "react-redux";
// import { toggleTheme } from "../stores/themeAction";

const ProfileScreen = ({ appTheme, toggleTheme }) => {
  const navigation = useNavigation();

  // Handler

  // function toggleThemeHandler() {
  //   if (appTheme?.name == "light") {
  //     toggleTheme("dark");
  //   } else {
  //     toggleTheme("light");
  //   }
  // }
  const createOneButtonAlert = () =>
    Alert.alert(" Oops!", "Share option not available", [
      {
        text: "Ok",
      },
    ]);
  return (
    <ScrollView style={{ width: "100%" }}>
      <View
        style={{
          alignItems: "center",
          marginTop: 10,
          paddingTop: 20,
          // backgroundColor: appTheme?.backgroundColor1,
        }}
      >
        <View
          style={{ flexDirection: "row", alignSelf: "flex-end", padding: 10 }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
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
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            margin: 10,
            color: appTheme?.textColor,
          }}
        >
          {" "}
          Berlin Youpil
        </Text>
        <Text style={{ color: appTheme?.textColor }}>
          123 followers | 534 following
        </Text>
      </View>

      <MansoryList dummyData={dummyData} />
    </ScrollView>
  );
};

function mapStateToProps(state) {
  return {
    appTheme: state.appTheme,
    error: state.error,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleTheme: (themeType) => {
      return dispatch(toggleTheme(themeType));
    },
  };
}

// export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
export default ProfileScreen;
