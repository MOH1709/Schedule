//---------------------------------- Default Imports ----------------------------------
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ToastAndroid,
  TouchableOpacity,
  Alert,
} from "react-native";

//---------------------------------- Custom Imports ----------------------------------
import { CustomHeader, AddButton } from "../../Components";
import { COLOR } from "../../Constants";
import { useNavigation } from "@react-navigation/native";

export default function Project() {
  const [list, setList] = useState(global.taskList.ElementNo0);
  const navigation = useNavigation();

  // ----------------------- Event Handlers ---------------------------
  const addFile = (text) => {
    global.taskList[text] = [];

    global.taskList["ElementNo0"] = [
      {
        key: (global.key++).toString(),
        data: text,
        time: new Date().getTime(),
      },
      ...global.taskList["ElementNo0"],
    ];
    setList(global.taskList.ElementNo0);
  };

  const deleteFile = (key) => {
    Alert.alert("Alert", "Do you want to delete this File permanently?", [
      {
        text: "OK",
        onPress: () => {
          global.taskList.ElementNo0 = list.filter((item) => item.key !== key);
          setList(global.taskList.ElementNo0);
        },
      },
      {
        text: "CANCEL",
        style: "cancel",
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <CustomHeader />
      <View style={styles.mainView}>
        <AddButton addTask={addFile} />

        {/*--------------------------------------------------------------------*/}
        <FlatList
          data={list}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity
                style={styles.file}
                onPress={() => {
                  navigation.navigate("TaskScreen", {
                    Item: item.data,
                    isTime: true,
                    HeaderLog: item.data,
                  });
                }}
                onLongPress={() => {
                  deleteFile(item.key);
                }}
              >
                <AntDesign name="folder1" size={24} style={styles.fileIcon} />
                <Text style={styles.text} numberOfLines={1}>
                  {item.data}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainView: {
    flex: 12,
  },
  file: {
    flexDirection: "row",
    alignContent: "center",
    borderRadius: 50,
    elevation: 10,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    padding: 10,
    margin: 20,
  },
  fileIcon: {
    color: COLOR.buttonIcon,
    backgroundColor: COLOR.buttonBg,
    height: 50,
    width: 50,
    borderRadius: 50,
    paddingTop: 10,
    textAlign: "center",
    elevation: 20,
  },
  text: {
    marginRight: 60,
    color: "black",
    marginLeft: 30,
    marginTop: 4,
    letterSpacing: 1,
    fontSize: 20,
  },
});
