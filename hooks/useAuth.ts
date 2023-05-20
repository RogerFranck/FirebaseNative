import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../db/firebaseConfig";
import { Alert } from "react-native";

export default function useAuth() {
  const onSignIn = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => console.log(user))
      .catch((error) => Alert.alert("Error", error.message));
  };
  const onSignOut = () => {};

  return {
    onSignIn,
    onSignOut,
  };
}
