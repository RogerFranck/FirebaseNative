import React from "react";
import { View, TextInput, StyleSheet, Image } from "react-native";
import { Button } from "react-native-paper";
import useAuth from "../hooks/useAuth";
import { LogoImg } from "../const/img";
import useForm from "../hooks/useForm";

const defaultForm = { email: "rogeralmeydaramos@outlook.com", password: "123456" };

export default function Login({ navigation }: any) {

    const handleChangue = (field:string, object:any) => {
        console.log('change:', field, object)
    }
  
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        style={styles.input}
        onChangeText={(e) => handleChangue("email", e)}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.input}
        onChangeText={(e) => handleChangue("password", e)}
      />
      <Button
        mode="contained"
        onPress={() => console.log('Guaradar')}
        style={styles.button}
      >
        Save
      </Button>
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
