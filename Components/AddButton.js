//---------------------------------- Default Imports ----------------------------------
import React from "react";
import { useNavigation } from "@react-navigation/native";

import { TouchableOpacity, Text, StyleSheet } from "react-native";

//---------------------------------- Custom Imports ----------------------------------
import { SIZE, COLOR } from "../Constants";

//---------------------------------- Exported Component ----------------------------------
export default function AddButton({ addTask, isTime }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate("AddTaskScreen", {
          addTask,
          isTime,
        })
      }
    >
      <Text style={styles.text}>+</Text>
    </TouchableOpacity>
  );
}

//--------------------------------------------------------------------
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    height: SIZE.height / 12,
    width: SIZE.height / 12,
    borderRadius: 100,
    bottom: SIZE.height / 30,
    right: SIZE.height / 40,
    backgroundColor: COLOR.buttonBg,
    elevation: 25,
    zIndex: 1,
  },
  text: {
    color: COLOR.buttonIcon,
    fontSize: SIZE.height / 25,
  },
});
