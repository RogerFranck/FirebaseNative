import React, { useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Text, Card, FAB, Dialog } from '@rneui/themed';
import useGetProductData from "../hooks/useGetProductData";
import { backgroundPage } from '../const/color';
import { image_placeholder } from '../const/img';
import { AlignJustify, Edit, Trash, PlusCircle } from "react-native-feather";
import deleteData from "../hooks/deleteData";
import { useIsFocused } from "@react-navigation/native";

export default function Products({ navigation }: any) {
  const isFocused = useIsFocused();
  const [forceUpdate, setforceUpdate] = useState(true);

  const [dialogVisible, setDialogVisible] = useState(false);
  const [productSelected, setproductSelected] = useState({});

  const { products, getProducts } = useGetProductData()

  const confirmDelete = (product: object) => {
    setDialogVisible(true);
    setproductSelected(product)
  };

  const cancellDelete = () => {
    setDialogVisible(false);
    setproductSelected({})
  };

  const deleteProduct = () => {
    const { id }: any = productSelected;
    deleteData(id, "productos")
    setproductSelected({});
    setDialogVisible(false);
    setforceUpdate(!forceUpdate)
  };

  useEffect(() => {
    getProducts()
  }, [isFocused, forceUpdate])


  return (
    <View style={styles.container}>
      <Dialog
        isVisible={dialogVisible}
        onBackdropPress={() => cancellDelete()}
      >
        <Dialog.Title title="¿Estás seguro?" />
        <Text>Los datos serán borrados permanentemente</Text>
        <Dialog.Actions>
          <Dialog.Button title="Borrar" onPress={() => deleteProduct()} />
        </Dialog.Actions>
      </Dialog>
      <ScrollView style={styles.scrollview}>
        {
          products.map(({ imagen, nombre, precio_compra, precio_venta, unidades, id }) => (
            <Card
              key={id}
              containerStyle={styles.card}>
              <Card.Image
                style={styles.image}
                source={{
                  uri: imagen || image_placeholder,
                }}
              />
              <Card.Title style={styles.title}>
                {nombre}
              </Card.Title>
              <View style={styles.textContainer}>
                <Text style={styles.text}>
                  Precio Venta: ${precio_venta}
                </Text>
                <Text style={styles.text}>
                  Precio Compra: ${precio_compra}
                </Text>
                <Text style={styles.text}>
                  Unidades: {unidades}
                </Text>
              </View>
              <View style={styles.buttonGroup}>
                <TouchableOpacity style={styles.mainButton}>
                  <View style={[styles.button]}>
                    <AlignJustify style={styles.icon} stroke={'white'} />
                    <Text style={styles.buttonText}> Descripción</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.secButton}>
                  <View style={[styles.button]}>
                    <Edit style={styles.icon} stroke={'white'} onPress={() => navigation.navigate("ProductForm", {product: { imagen, nombre, precio_compra, precio_venta, unidades, id }})} />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.secButton} onPress={() => confirmDelete({ imagen, nombre, precio_compra, precio_venta, unidades, id })}>
                  <View style={[styles.button]}>
                    <Trash style={styles.icon} stroke={'white'} />
                  </View>
                </TouchableOpacity>
              </View>
            </Card>
          ))
        }
        <View style={{
          backgroundColor: 'blue',
          margin: 40
        }} />
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
    marginTop: 50
  },
  card: {
    borderRadius: 16
  },
  title: {
    alignSelf: 'flex-start',
    fontSize: 25,
    marginBottom: 5
  },
  text: {
    margin: 5,
    color: "#7f8b93"
  },
  textContainer: {
    marginBottom: 15
  },
  image: {
    alignSelf: "center",
    marginBottom: 20,
    padding: 10,
    borderRadius: 16,
    flex: 1,
    resizeMode: 'cover'
  },
  icon: {
    marginRight: 3
  },
  buttonGroup: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    backgroundColor: 'black',
    padding: 10
  },
  buttonText: {
    color: 'white',
  },
  secButton: {
    width: "20%",
    margin: 5
  },
  mainButton: {
    width: "50%",
    margin: 5
  },
});
