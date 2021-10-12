import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Unplanned() {
  return (
    <View style={styles.container}>
      <Text>Incomplete</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
