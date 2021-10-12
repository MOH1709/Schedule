//---------------------------------- Default Imports ----------------------------------
import React from "react";

import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

//---------------------------------- Custom Imports ----------------------------------
import { COLOR } from "../Constants";

//---------------------------------- Exported Component ----------------------------------
export default function TaskViewer({ list, removeTask, deleteTask }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity
              style={{
                backgroundColor: item.completed
                  ? COLOR.secondary
                  : COLOR.primary,
                ...styles.task,
              }}
              onPress={() => {
                removeTask(item);
              }}
              onLongPress={() => {
                deleteTask(item.key);
              }}
            >
              <Text
                style={{
                  textDecorationLine: item.completed ? "line-through" : "none",
                  color: item.completed ? COLOR.primary : COLOR.secondary,
                  ...styles.text,
                }}
                numberOfLines={5}
              >
                {item.data}
              </Text>
              {item.time && (
                <Text style={styles.time}>
                  {Math.abs(item.time.hour - 12)} : {item.time.minute}
                </Text>
              )}
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

//--------------------------------------------------------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  task: {
    flexDirection: "row",
    width: "90%",
    padding: 20,
    elevation: 5,
    borderRadius: 20,
    marginVertical: 10,
    marginHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    letterSpacing: 1,
    flex: 3,
    padding: 2,
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    textDecorationStyle: "solid",
  },
  time: {
    flex: 1,
  },
});
