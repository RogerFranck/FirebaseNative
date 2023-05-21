import React from "react";
import { View, TextInput, StyleSheet, Image } from "react-native";
import { Button } from "react-native-paper";
import useForm from "../hooks/useForm";

const defaultForm = { 
  nombre: "", 
  precio_venta: 0,
  precio_compra: 0,
  unidades: 0,
  imagen: "",
};

export default function ProductForm({ navigation }: any) {

  const { state, handleChangue } = useForm(defaultForm);
  
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Nombre"
        style={styles.input}
        onChangeText={(e) => handleChangue("nombre", e)}
      />
      <TextInput
        placeholder="Precio Venta"
        keyboardType='numeric'
        style={styles.input}
        onChangeText={(e) => handleChangue("precio_venta", e)}
      />
      <TextInput
        placeholder="Precio Compra"
        keyboardType='numeric'
        style={styles.input}
        onChangeText={(e) => handleChangue("precio_compra", e)}
      />
      <TextInput
        placeholder="Unidades"
        keyboardType='numeric'
        style={styles.input}
        onChangeText={(e) => handleChangue("unidades", e)}
      />
      <TextInput
        placeholder="Imagen"
        style={styles.input}
        onChangeText={(e) => handleChangue("imagen", e)}
      />
      <Button
        mode="contained"
        onPress={() => console.log('Guardar')}
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
