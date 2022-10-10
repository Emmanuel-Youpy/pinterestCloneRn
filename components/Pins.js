import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";

const Pins = ({ image, title }) => {
  const [ratio, setRatio] = useState(1);

  const onLike = () => {};

  useEffect(() => {
    if (image) {
      Image.getSize(image, (width, height) => setRatio(width / height));
    }
  }, [image]);

  return (
    <View style={{ width: "100%" }}>
      <View>
        <Image
          source={{
            uri: image,
          }}
          style={[styles.img, { aspectRatio: ratio }]}
        />
        <TouchableOpacity
          style={{
            backgroundColor: "#D3CFD4",
            position: "absolute",
            bottom: 10,
            right: 10,
            padding: 5,
            borderRadius: 20,
          }}
        >
          <Feather name="heart" size={16} color="black" />
        </TouchableOpacity>
      </View>

      <Text style={{ fontSize: 20, fontWeight: "bold", margin: 5 }}>
        {title}
      </Text>
    </View>
  );
};

export default Pins;

const styles = StyleSheet.create({
  img: {
    width: "100%",
    borderRadius: 25,
    resizeMode: "cover",
    // aspectRatio: 1 / 2,
  },
});
