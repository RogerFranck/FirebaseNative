import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import AddControl from "../components/common/addControl";
import useSales from "../hooks/useSales";
import { Picker } from "@react-native-picker/picker";
import Flex from "../components/common/flexControl";
import { Divider } from "@rneui/themed";
import ButtonControl from "../components/common/buttonControl";

export default function SalesForm({ navigation }: any) {
  const {
    addNumber,
    deleteNumber,
    number,
    products,
    services,
    elementList,
    addElementList,
    total,
    saveSales,
  } = useSales(navigation);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sales</Text>
      <AddControl onAdd={addNumber}>
        {/* <ScrollView style={styles.scrollview}> */}
        {Array(number)
          .fill(1)
          .map((_, i) => (
            <AddControl.List onRemove={deleteNumber} key={i} index={i}>
              <View>
                <Picker
                  style={styles.input}
                  placeholder="Product or service"
                  selectedValue={elementList[i].element}
                  onValueChange={(e) => addElementList("element", i, e)}
                >
                  <Picker.Item label="Vacio" value={{}} />
                  {products.map((e: any) => (
                    <Picker.Item key={e.id} label={e.nombre} value={e} />
                  ))}
                  {services.map((e: any) => (
                    <Picker.Item key={e.id} label={e.nombre} value={e} />
                  ))}
                </Picker>
                <Flex>
                  <Picker
                    style={styles.inputMini}
                    placeholder="Product or service"
                    selectedValue={elementList[i].cant}
                    onValueChange={(e) => addElementList("cant", i, e)}
                  >
                    {Array(Number(elementList[i].element?.unidades || 1))
                      .fill(1)
                      .map((_, secundaryI) => (
                        <Picker.Item
                          key={secundaryI}
                          label={`${secundaryI + 1}`}
                          value={`${secundaryI + 1}`}
                        />
                      ))}
                  </Picker>
                  <Text style={styles.text2}>
                    x ${elementList[i].element?.precioVenta}
                  </Text>
                </Flex>
              </View>
            </AddControl.List>
          ))}
        {/* </ScrollView> */}
      </AddControl>
      <Divider />
      <Flex justyBtw>
        <Text style={styles.text3}>Total: </Text>
        <Text style={styles.text3}>${total}</Text>
      </Flex>
      <Divider style={styles.margin} />
      <ButtonControl onPress={saveSales}>Pay</ButtonControl>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 66,
    backgroundColor: "#F0F1F3",
  },
  scrollview: {
    maxHeight: 500,
    width: "100%",
  },
  input: {
    marginBottom: 16,
    backgroundColor: "white",
    borderRadius: 8,
    padding: 20,
    width: "100%",
  },
  inputMini: {
    marginBottom: 16,
    backgroundColor: "white",
    borderRadius: 8,
    padding: 20,
    width: "50%",
  },
  text: {
    marginBottom: 50,
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  text2: {
    alignSelf: "center",
    fontSize: 20,
  },
  text3: {
    marginTop: 30,
    alignSelf: "flex-end",
    fontSize: 20,
  },
  margin: {
    marginTop: 20,
    marginBottom: 20,
  },
});
