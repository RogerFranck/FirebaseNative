import { Alert } from "react-native";

export const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const isValidPassword = (password: string) => password.length >= 6;

export const isRequired = (textList: Array<string>) =>
  textList.every((text) => text.length > 0);

export const onValidFormSignXn = (email: string, password: string) => {
  if (!isValidEmail(email)) {
    Alert.alert("Error", "Invalid email");
    return false;
  }
  if (!isValidPassword(password)) {
    Alert.alert("Error", "Invalid password");
    return false;
  }
  if (!isRequired([email, password])) {
    Alert.alert("Error", "Some texts are empty");
    return false;
  }
  return true;
};
