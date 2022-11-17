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
import { colors } from "../constants/theme";
import { useContext } from "react";
import { ThemeContext } from "../components/ThemeContext";
import { Ionicons } from "@expo/vector-icons";

// import { connect } from "react-redux";
// import { toggleTheme } from "../stores/themeAction";

const ProfileScreen = ({ appTheme, toggleTheme }) => {
  const { theme } = useContext(ThemeContext);
  let activeColor = colors[theme.mode];
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
    <ScrollView
      style={{ width: "100%", backgroundColor: activeColor.backgroundColor1 }}
    >
      <View
        style={{
          alignItems: "center",
          marginTop: 10,
          paddingTop: 20,
          // backgroundColor: appTheme?.backgroundColor1,
        }}
      >
        <View
          style={{ flexDirection: "row", alignSelf: "flex-end", padding: 5 }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
            <Ionicons
              name="settings"
              size={24}
              color={activeColor.textColor}
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
            color: activeColor.textColor,
          }}
        >
          {" "}
          Berlin Youpil
        </Text>
        <Text style={{ color: activeColor.textColor }}>
          123 followers | 534 following
        </Text>
      </View>

      <MansoryList dummyData={dummyData} />
    </ScrollView>
  );
};

// function mapStateToProps(state) {
//   return {
//     appTheme: state.appTheme,
//     error: state.error,
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     toggleTheme: (themeType) => {
//       return dispatch(toggleTheme(themeType));
//     },
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
export default ProfileScreen;
