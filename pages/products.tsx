import React, { useEffect } from "react";
import { View, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { Text, Card, FAB } from '@rneui/themed';
import useGetProductData from "../hooks/useGetProductData";
import { backgroundPage } from '../const/color';
import { AlignJustify, Edit, Trash, PlusCircle } from "react-native-feather";

export default function Products({ navigation }: any) {

  const { products, getProducts } = useGetProductData()

  useEffect(() => {
    getProducts()
  }, [])


  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollview}>
        {
          products.map(({ imagen, nombre, precio_compra, precio_venta, unidades, id }) => (
            <Card
              key={id}
              containerStyle={styles.card}>
              <Card.Image
                style={styles.image}
                source={{
                  uri: imagen,
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
                    <Edit style={styles.icon} stroke={'white'} />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.secButton}>
                  <View style={[styles.button]}>
                    <Trash style={styles.icon} stroke={'white'} />
                  </View>
                </TouchableOpacity>
              </View>
            </Card>
          ))
        }
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
