import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Text, Card, FAB, Divider } from "@rneui/themed";
import { backgroundPage } from "../const/color";
import useSalesMain from "../hooks/useSalesMain";

export default function Sales({ navigation }: any) {
  const { sales } = useSalesMain();
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollview}>
        {sales.map(({ id, date, sales }: any) => (
          <Card key={id} containerStyle={styles.card}>
            <Card.Title style={styles.title}>{date}</Card.Title>
            <View style={styles.textContainer}>
              {sales.map(
                (
                  { cant, id: isSale, precioVenta, isProduct }: any,
                  i: number
                ) => (
                  <View key={isSale}>
                    {i == 0 && <Divider />}
                    <Text style={styles.text}>
                      {isProduct ? "Producto" : "Servicio"}: {isSale}
                    </Text>
                    <Text style={styles.text}>
                      Precio Venta: ${precioVenta}
                    </Text>
                    <Text style={styles.text}>Cantidad: {cant}</Text>
                    <Divider />
                  </View>
                )
              )}
            </View>
          </Card>
        ))}
      </ScrollView>
      <FAB
        style={{ width: "40%" }}
        placement="right"
        size="small"
        title="Create"
        icon={{ name: "add", color: "#fff" }}
        onPress={() => navigation.navigate("SalesForm")}
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
