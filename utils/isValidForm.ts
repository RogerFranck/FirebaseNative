import { Alert } from "react-native";

export const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  export const isValidImage = (email: string) => {
    if(typeof email !== 'string') return false;
  return(email.match(/^http[^\?]*.(jpg|jpeg|gif|png|tiff|bmp)(\?(.*))?$/gmi) != null);
  }
  

export const isValidPassword = (password: string) => password.length >= 6;

export const isValidPrice = (precio_venta:string, precio_compra: string) => Number(precio_venta) >= Number(precio_compra);

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


export const onValidFormProduct = ({nombre, precio_venta, precio_compra, unidades, imagen}:any) => {
  if (!isValidPrice(precio_venta, precio_compra)) {
    Alert.alert("Error", "The Selling Price must be higher than the Purchase Price");
    return false;
  }
  if (!isValidImage(imagen)) {
    Alert.alert("Error", "The image should be a valid link");
    return false;
  }
  if (!isRequired([nombre, precio_venta, precio_compra, unidades,  imagen])) {
    Alert.alert("Error", "Some fields are empty");
    return false;
  }
  return true;
};

export const onValidFormServices = ({nombre, precioVenta, costoServicio}:any) => {
  if (!isValidPrice(precioVenta, costoServicio)) {
    Alert.alert("Error", "The Selling Price must be higher than the Service Cost");
    return false;
  }
  if (!isRequired([nombre, precioVenta, costoServicio,])) {
    Alert.alert("Error", "Some fields are empty");
    return false;
  }
  return true;
};