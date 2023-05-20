import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";


export default function Login() {
  return (
    <View style={styles.container}>
      <Text>
        HOME PAGE
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 36,
    backgroundColor: "#F0F1F3",
  },
  input: {
    marginBottom: 16,
    backgroundColor: "white",
    borderRadius: 8,
    padding: 20,
  },
  button: {
    marginTop: 16,
    borderRadius: 8,
    padding: 8,
    backgroundColor: "black",
  },
  image: {
    width: 200,
    height: 100,
    alignSelf: "center",
    marginBottom: 50,
    padding: 10,
    borderRadius: 8,
  },
});
