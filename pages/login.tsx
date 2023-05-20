import { TextInput } from "@react-native-material/core";
import React from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import useAuth from "../hooks/useAuth";

export default function Login() {
  const { onSignIn } = useAuth();
  return (
    <View style={styles.container}>
      <TextInput label="Email" style={styles.input} />
      <TextInput label="Password" secureTextEntry style={styles.input} />
      <Button mode="contained" onPress={onSignIn} style={styles.button}>
        Login
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 36,
  },
  input: {
    marginBottom: 16,
    backgroundColor: "#F2F2F2",
  },
  button: {
    marginTop: 16,
    backgroundColor: "#2F80ED",
  },
});
