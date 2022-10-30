import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const CreatorsCard = ({ image, duration, profilePic }) => {
  return (
    <View
      style={{
        width: 150,
        height: 300,
        paddingRight: 5,
      }}
    >
      <TouchableOpacity style={{}}>
        <Image
          source={{
            uri: "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2015/03/chocolateWhiteDark-454384771-770x533-1.jpg",
          }}
          style={{
            width: "100%",
            height: "91%",
            resizeMode: "cover",
            borderRadius: 15,
          }}
        />
        <View
          style={{
            position: "absolute",
            top: 5,
            left: 5,
            backgroundColor: "black",
            borderRadius: 10,
            padding: 5,
          }}
        >
          <Text style={{ color: "white" }}>{duration}</Text>
        </View>
        {/* profile Image */}
        <View style={{ position: "absolute", bottom: 0, left: 50, right: 0 }}>
          <Image
            source={{
              uri: "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2015/03/chocolateWhiteDark-454384771-770x533-1.jpg",
            }}
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              borderWidth: 2,
              borderColor: "white",
            }}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CreatorsCard;
