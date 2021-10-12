//---------------------------------- Default Imports ----------------------------------
import React from "react";
import { AntDesign } from "@expo/vector-icons";

import { TouchableOpacity, StyleSheet } from "react-native";

//---------------------------------- Custom Imports ----------------------------------
import { SIZE, COLOR } from "../Constants";

//---------------------------------- Exported Component ----------------------------------
export default function ReloadButton({ reloadTask }) {
  return (
    <TouchableOpacity style={styles.container} onPress={reloadTask}>
      <AntDesign
        name="export2"
        size={SIZE.height / 25}
        color={COLOR.buttonIcon}
      />
    </TouchableOpacity>
  );
}

//--------------------------------------------------------------------
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    alignItems: "center",
    borderRadius: 50,
    justifyContent: "center",
    height: SIZE.height / 12,
    width: SIZE.height / 12,
    bottom: SIZE.height / 30,
    left: SIZE.height / 40,
    backgroundColor: COLOR.buttonBg,
    elevation: 25,
    zIndex: 1,
  },
});
