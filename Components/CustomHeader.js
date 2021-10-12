//---------------------------------- Default Imports ----------------------------------
import React from "react";

import { View, Text, StyleSheet } from "react-native";

//---------------------------------- Custom Imports ----------------------------------
import { COLOR } from "../Constants";

//---------------------------------- Exported Component ----------------------------------
export default function CustomHeader({ log }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{log}</Text>
    </View>
  );
}

//--------------------------------------------------------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    elevation: 5,
    marginLeft: 10,
    padding: 10,
    borderBottomLeftRadius: 38,
    borderTopLeftRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLOR.primary,
  },
  text: {
    letterSpacing: 1,
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 15,
    color: "purple",
  },
});
