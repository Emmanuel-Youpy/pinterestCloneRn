import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import dummyData from "../constants/dummyData";
import dummyData2 from "../constants/dummyData2";

const PinScreen2 = ({ navigation }) => {
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

  const pin = dummyData2.find((p) => p.id === pinId);
  if (!pin) {
    return <Text>Pin not found</Text>;
  }
  return (
    <SafeAreaView style={{ backgroundColor: "black" }}>
      <StatusBar style="light" />
      <View
        style={{
          backgroundColor: "white",
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
          }}
        >
          {pin?.title}
        </Text>
        <TouchableOpacity
          onPress={navigation.goBack}
          style={{ position: "absolute", left: 20, top: 30 }}
        >
          <MaterialIcons name="arrow-back-ios" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PinScreen2;

const styles = StyleSheet.create({
  img: {
    width: "100%",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
});
