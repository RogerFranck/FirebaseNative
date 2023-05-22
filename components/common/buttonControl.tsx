import React from "react";
import { Button } from "react-native-paper";
import { StyleSheet } from "react-native";

export default function ButtonControl({ onPress, children, isSecundary }: any) {
  return (
    <Button
      mode={isSecundary ? "outlined" : "contained"}
      onPress={onPress}
      style={isSecundary ? styles.secundaryButton : styles.button}
      labelStyle={{ color: isSecundary ? "black" : "white" }}
    >
      {children}
    </Button>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 16,
    borderRadius: 8,
    padding: 8,
    backgroundColor: "black",
  },
  secundaryButton: {
    marginTop: 16,
    borderRadius: 8,
    padding: 8,
    backgroundColor: "white",
    borderColor: "black",
  },
});
