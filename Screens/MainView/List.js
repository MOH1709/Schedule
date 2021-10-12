//---------------------------------- Default Imports ----------------------------------
import React from "react";

import { View, StyleSheet } from "react-native";

//---------------------------------- Custom Imports ----------------------------------
import TaskScreen from "../TaskScreen";

//---------------------------------- Exported Component ----------------------------------
export default function List() {
  return (
    <View style={styles.container}>
      <TaskScreen
        Item={"ElementNo5"}
        HeaderLog={`Some Tasks completed on \n\t Basic of Day not Time`}
      />
    </View>
  );
}

//--------------------------------------------------------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
