import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";

const Pins = (props) => {
  const { image, title } = props.pin;
  const [ratio, setRatio] = useState(1);

  const onLike = () => {};

  useEffect(() => {
    if (image) {
      Image.getSize(image, (width, height) => setRatio(width / height));
    }
  }, [image]);

  return (
    <View style={{ width: "100%", padding: 4 }}>
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

      <Text
        numberOfLines={2}
        style={{
          fontSize: 16,
          lineHeight: 22,
          fontWeight: "600",
          margin: 10,
          color: "#181818",
        }}
      >
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

    // resizeMode: "cover",
    // aspectRatio: 1 / 2,
  },
});
