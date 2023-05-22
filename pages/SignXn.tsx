import React, { useEffect } from "react";
import { View, TextInput, StyleSheet, Image, Text } from "react-native";
import useAuth from "../hooks/useAuth";
import { LogoImg } from "../const/img";
import useForm from "../hooks/useForm";
import ButtonControl from "../components/common/buttonControl";
import useGetUser from "../hooks/useGetUser";

const defaultForm = {
  email: "rogeralmeydaramos@outlook.com",
  password: "123456",
};

export default function Login({ navigation }: any) {
  const { onSignIn, onSignUp, onSwitchAuth, isSignUp } = useAuth(navigation);
  const { state, handleChangue } = useForm(defaultForm);
  const { user } = useGetUser();

  useEffect(() => {
    if (user) navigation.navigate("MainPage");
  }, []);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: LogoImg }} />
      <Text style={styles.principalText}>
        {isSignUp ? "Sign up" : "Sign in"}
      </Text>
      <TextInput
        placeholder="Email"
        style={styles.input}
        onChangeText={(e) => handleChangue("email", e)}
        value={state.email}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.input}
        onChangeText={(e) => handleChangue("password", e)}
        value={state.password}
      />
      <ButtonControl
        onPress={() =>
          isSignUp
            ? onSignUp(state.email, state.password)
            : onSignIn(state.email, state.password)
        }
      >
        {isSignUp ? "Sign up" : "Sign in"}
      </ButtonControl>
      <ButtonControl onPress={onSwitchAuth} isSecundary>
        {!isSignUp ? "Sign up" : "Sign in"}
      </ButtonControl>
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
  image: {
    width: 200,
    height: 100,
    alignSelf: "center",
    marginBottom: 40,
    padding: 10,
    borderRadius: 8,
  },
  principalText: {
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 35,
  },
});
