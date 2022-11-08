import React, { useState, useEffect } from "react";
import {
  Button,
  Image,
  View,
  Platform,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";

export default function CreatePinScreen() {
  const navigation = useNavigation();

  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    pickImage = "";

    // console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const onSubmit = () => {};
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
      }}
    >
      <TouchableOpacity
        onPress={pickImage}
        style={{
          backgroundColor: "black",
          padding: 15,
          borderRadius: 30,
          margin: 10,
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>
          Create your pin
        </Text>
      </TouchableOpacity>
      {image && (
        <>
          <Image
            source={{ uri: image }}
            style={{ width: "100%", aspectRatio: 1, marginVertical: 10 }}
          />
          <TextInput
            placeholder="Title...."
            style={{
              borderWidth: 1,
              borderColor: "lightgrey",
              padding: 5,
              width: "100%",
              borderRadius: 5,
            }}
            value={title}
            onChangeText={setTitle}
          />
          <View
            style={{
              backgroundColor: "black",
              padding: 15,
              borderRadius: 30,
              margin: 10,
            }}
          >
            <TouchableOpacity
              // onPress={onSubmit}
              onPress={pickImage}
              // {() => navigation.navigate("Home")}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>Submit</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
}
