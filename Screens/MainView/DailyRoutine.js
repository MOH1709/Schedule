//---------------------------------- Default Imports ----------------------------------
import React from "react";

import { View, StyleSheet } from "react-native";

//---------------------------------- Custom Imports ----------------------------------
import TaskScreen from "../TaskScreen";

//---------------------------------- Exported Component ----------------------------------
export default function DailyRoutine() {
  return (
    <View style={styles.container}>
      <TaskScreen
        Item={"ElementNo1"}
        HeaderLog={`Add your every Day \n\t Basic Routine here`}
        isTime={true}
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
