import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import dummyData from "../constants/dummyData";
import MansoryList2 from "../components/MansoryList2";
import { colors } from "../constants/theme";
import { useContext } from "react";
import { ThemeContext } from "../components/ThemeContext";
import dummyData2 from "../constants/dummyData2";

const PinScreen = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);
  let activeColor = colors[theme.mode];
  const [ratio, setRatio] = useState(1);

  useEffect(() => {
    if (pin?.image) {
      Image.getSize(pin.image, (width, height) => setRatio(width / height));
    }
  }, [pin]);

  // const inset = useSafeAreaInsets();
  // const pin = dummyData[1];
  // const itemId = route.params;
  // console.log(itemId);
  const route = useRoute();
  const pinId = route.params?.id;

  // console.log(pinId);

  const pin = dummyData.find((p) => p.id === pinId);
  if (!pin) {
    return <Text>Pin not found</Text>;
  }
  return (
    <SafeAreaView style={{ backgroundColor: "black" }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar style="light" />
        <View
          style={{
            backgroundColor: activeColor.backgroundColor1,
            height: "100%",
            borderTopRightRadius: 50,
            borderTopLeftRadius: 50,
          }}
        >
          <Image
            source={{ uri: pin?.image }}
            style={[styles.img, { aspectRatio: ratio }]}
          />
          <Text
            style={{
              margin: 10,
              fontSize: 24,
              fontWeight: "600",
              textAlign: "center",
              lineHeight: 35,
              color: activeColor.textColor,
            }}
          >
            {pin?.title}
          </Text>
          <View
            style={{
              justifyContent: "center",
              paddingTop: 20,
            }}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                padding: 5,
              }}
            >
              <View
                style={{
                  backgroundColor: activeColor.backgroundColor2,
                  padding: 15,
                  borderRadius: 30,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    color: activeColor.textColor2,
                  }}
                >
                  More like this
                </Text>
              </View>
            </View>

            <MansoryList2 dummyData={dummyData2} />
          </View>
          <TouchableOpacity
            onPress={navigation.goBack}
            style={{ position: "absolute", left: 20, top: 30 }}
          >
            <MaterialIcons name="arrow-back-ios" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PinScreen;

const styles = StyleSheet.create({
  img: {
    width: "100%",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
});
