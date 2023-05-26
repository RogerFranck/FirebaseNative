import React from "react";
import { View, TextInput, StyleSheet, Image } from "react-native";
import { Button } from "react-native-paper";
import useForm from "../hooks/useForm";
import { onValidFormProduct } from "../utils/isValidForm";
import postData from "../Service/products/handlePost";

const defaultForm = {
  nombre: "",
  precioVenta: 0,
  precio_compra: 0,
  unidades: 0,
  imagen: "",
};

export default function ProductForm({ route, navigation }: any) {
  const setProduct = () => {
    if (route?.params) {
      const { product } = route?.params;
      return product;
    }
    return defaultForm;
  };

  const { state, handleChangue } = useForm(setProduct());

  const verifyAndSend = () => {
    if (onValidFormProduct(state)) {
      postData(state, "productos");
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={state.nombre}
        placeholder="Nombre"
        style={styles.input}
        onChangeText={(e) => handleChangue("nombre", e)}
      />
      <TextInput
        value={state.precioVenta.toString()}
        placeholder="Precio Venta"
        keyboardType="numeric"
        style={styles.input}
        onChangeText={(e) => handleChangue("precioVenta", e)}
      />
      <TextInput
        value={state.precio_compra.toString()}
        placeholder="Precio Compra"
        keyboardType="numeric"
        style={styles.input}
        onChangeText={(e) => handleChangue("precio_compra", e)}
      />
      <TextInput
        value={state.unidades.toString()}
        placeholder="Unidades"
        keyboardType="numeric"
        style={styles.input}
        onChangeText={(e) => handleChangue("unidades", e)}
      />
      <TextInput
        value={state.imagen}
        placeholder="Imagen"
        style={styles.input}
        onChangeText={(e) => handleChangue("imagen", e)}
      />
      <Button
        mode="contained"
        onPress={() => verifyAndSend()}
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
