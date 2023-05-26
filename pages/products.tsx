import React from "react";
import { View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Text, Card, FAB, Dialog } from "@rneui/themed";
import { backgroundPage } from "../const/color";
import { image_placeholder } from "../const/img";
import { AlignJustify, Edit, Trash } from "react-native-feather";
import useProducts from "../hooks/useProducts";

export default function Products({ navigation }: any) {
  const {
    deleteProduct,
    cancellDelete,
    confirmDelete,
    dialogVisible,
    products,
  } = useProducts();
  return (
    <View style={styles.container}>
      <Dialog isVisible={dialogVisible} onBackdropPress={() => cancellDelete()}>
        <Dialog.Title title="¿Estás seguro?" />
        <Text>Los datos serán borrados permanentemente</Text>
        <Dialog.Actions>
          <Dialog.Button title="Borrar" onPress={() => deleteProduct()} />
        </Dialog.Actions>
      </Dialog>
      <ScrollView style={styles.scrollview}>
        {products.map(
          ({ imagen, nombre, precio_compra, precioVenta, unidades, id }) => (
            <Card key={id} containerStyle={styles.card}>
              <Card.Image
                style={styles.image}
                source={{
                  uri: imagen || image_placeholder,
                }}
              />
              <Card.Title style={styles.title}>{nombre}</Card.Title>
              <View style={styles.textContainer}>
                <Text style={styles.text}>Precio Venta: ${precioVenta}</Text>
                <Text style={styles.text}>Precio Compra: ${precio_compra}</Text>
                <Text style={styles.text}>Unidades: {unidades}</Text>
              </View>
              <View style={styles.buttonGroup}>
                <TouchableOpacity
                  style={styles.mainButton}
                  onPress={() => console.log("Hola")}
                >
                  <View style={[styles.button]}>
                    <AlignJustify style={styles.icon} stroke={"white"} />
                    <Text style={styles.buttonText}>Descripción</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.secButton}>
                  <View style={[styles.button]}>
                    <Edit
                      style={styles.icon}
                      stroke={"white"}
                      onPress={() =>
                        navigation.navigate("ProductForm", {
                          product: {
                            imagen,
                            nombre,
                            precio_compra,
                            precioVenta,
                            unidades,
                            id,
                          },
                        })
                      }
                    />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.secButton}
                  onPress={() =>
                    confirmDelete({
                      imagen,
                      nombre,
                      precio_compra,
                      precioVenta,
                      unidades,
                      id,
                    })
                  }
                >
                  <View style={[styles.button]}>
                    <Trash style={styles.icon} stroke={"white"} />
                  </View>
                </TouchableOpacity>
              </View>
            </Card>
          )
        )}
        <View
          style={{
            backgroundColor: "blue",
            margin: 40,
          }}
        />
      </ScrollView>
      <FAB
        style={{ width: "40%" }}
        placement="right"
        size="small"
        title="Create"
        icon={{ name: "add", color: "#fff" }}
        onPress={() => navigation.navigate("ProductForm")}
        color="black"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 36,
    backgroundColor: backgroundPage,
  },
  scrollview: {
    marginTop: 50,
  },
  card: {
    borderRadius: 16,
  },
  title: {
    alignSelf: "flex-start",
    fontSize: 25,
    marginBottom: 5,
  },
  text: {
    margin: 5,
    color: "#7f8b93",
  },
  textContainer: {
    marginBottom: 15,
  },
  image: {
    alignSelf: "center",
    marginBottom: 20,
    padding: 10,
    borderRadius: 16,
    flex: 1,
    resizeMode: "cover",
  },
  icon: {
    marginRight: 3,
  },
  buttonGroup: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  button: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    backgroundColor: "black",
    padding: 10,
  },
  buttonText: {
    color: "white",
  },
  secButton: {
    width: "20%",
    margin: 5,
  },
  mainButton: {
    width: "50%",
    margin: 5,
  },
});
