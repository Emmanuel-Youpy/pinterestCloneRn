import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const CustomInput = ({ value, setValue, placeholder, secureTextEntry }) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        // placeholder={placeholder}
        onChangeText={setValue}
        style={styles.input}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "white",
    width: "80%",
    borderColor: "lightblue",
    borderWidth: 3,
    borderRadius: 15,
    padding: 10,
    marginVertical: 2,
  },
  input: { color: "gray" },
});
