import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../db/firebaseConfig";
import { Alert } from "react-native";
import { useState, useContext } from "react";
import { onValidFormSignXn } from "../utils/isValidForm";
import { GeneralContext } from "../context/generalContext";

export default function useAuth(navigation: any) {
  const [isSignUp, setisSignUp] = useState(false);
  const { changeInfo } = useContext(GeneralContext);

  const onSave = (user: any) => {
    changeInfo("user", user._tokenResponse);
    navigation.navigate("MainPage");
  };

  const onError = (error: any) => Alert.alert("Error", error.message);

  const onSignIn = (email: string, password: string) => {
    if (onValidFormSignXn(email, password)) {
      signInWithEmailAndPassword(auth, email, password)
        .then(onSave)
        .catch(onError);
    }
  };
  const onSignUp = (email: string, password: string) => {
    if (onValidFormSignXn(email, password)) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(onSave)
        .catch(onError);
    }
  };

  const onSignOut = () => {
    signOut(auth)
      .then(() => navigation.navigate("Login"))
      .catch(onError);
  };

  const onSwitchAuth = () => {
    setisSignUp((prev) => !prev);
  };

  return {
    onSignIn,
    onSignUp,
    onSignOut,
    onSwitchAuth,
    isSignUp,
  };
}
