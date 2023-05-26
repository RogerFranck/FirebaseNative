import React from "react";
import { View, StyleSheet } from "react-native";

const Flex = ({ children, justyBtw }: any) => {
  return (
    <View
      style={[
        styles.containerStyle,
        justyBtw && { justifyContent: "space-between" },
      ]}
    >
      {children}
    </View>
  );
};

export default Flex;

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    flexWrap: "nowrap",
  },
});
