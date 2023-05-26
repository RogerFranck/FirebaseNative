import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { PlusCircle, Trash2 } from "react-native-feather";

const AddControl = ({ children, onAdd = () => {} }: any) => (
  <View style={styles.formaddfield}>
    {children}
    <TouchableOpacity style={styles.formaddfieldIconButton} onPress={onAdd}>
      <PlusCircle stroke={"black"} />
    </TouchableOpacity>
  </View>
);

const List = ({
  children,
  onRemove = () => {},
  index = 0,
  minLength = 1,
}: any) => (
  <View style={styles.formaddfieldList}>
    {children}
    {index >= minLength && (
      <TouchableOpacity style={styles.formaddfieldIcon} onPress={onRemove}>
        <Trash2 stroke={"black"} />
      </TouchableOpacity>
    )}
  </View>
);

AddControl.List = List;

export default AddControl;

const styles = StyleSheet.create({
  formaddfield: {
    position: "relative",
  },
  formaddfieldIconButton: {
    position: "absolute",
    zIndex: 1,
    left: -40,
    top: "auto",
    bottom: 60,
  },
  formaddfieldList: {},
  formaddfieldIcon: {
    position: "absolute",
    right: -40,
    top: 60,
    zIndex: 1,
  },
});
