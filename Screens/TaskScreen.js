// ---------------------- Default Import --------------------------
import React, { useState, useEffect } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";

import {
  View,
  Alert,
  StyleSheet,
  ToastAndroid,
  BackHandler,
} from "react-native";

// -------------------- Custom Import -------------------------------
import {
  AddButton,
  TaskViewer,
  CustomHeader,
  ReloadButton,
} from "../Components";

//---------------------------------- Exported Components ----------------------------------
export default function TaskScreen({ Item, isTime, HeaderLog }) {
  const route = useRoute();
  const navigation = useNavigation();

  if (Item === undefined) {
    Item = route.params.Item;
    isTime = route.params.isTime;
    HeaderLog = route.params.HeaderLog;
  }

  //---------------------------------- Back Handler During Unrevealed ----------------------------------

  function handleBackButtonClick() {
    if (route.params) {
      if (route.params.isLogin) {
        navigation.pop(2);
      } else {
        navigation.pop(1);
      }
    } else {
      navigation.pop(1);
    }
    return true;
  }

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(
        "hardwareBackPress",
        handleBackButtonClick
      );
    };
  }, []);

  // ----------------------- Event Handlers ---------------------------
  const [list, setList] = useState(global.taskList[Item]);

  const addTask = (text, time) => {
    global.taskList[Item] = [
      {
        key: (global.key++).toString(),
        data: text,
        completed: false,
        time: time ? time : undefined,
      },
      ...global.taskList[Item],
    ];
    setList(global.taskList[Item]);
  };

  const removeTask = (inputItem) => {
    if (inputItem.completed === false) {
      global.taskList[Item] = list.filter((item) => item.key !== inputItem.key);
      global.taskList[Item].push({
        key: inputItem.key,
        data: inputItem.data,
        completed: true,
      });

      setList(global.taskList[Item]);
    }
  };

  const deleteTask = (key) => {
    Alert.alert("Alert", "Do you want to delete this task permanently?", [
      {
        text: "OK",
        onPress: () => {
          global.taskList[Item] = list.filter((item) => item.key !== key);
          setList(taskList[Item]);
        },
      },
      {
        text: "CANCEL",
        style: "cancel",
      },
    ]);
  };

  const reloadData = () => {
    if (global.taskList[Item].length !== 0) {
      Alert.alert("Alert", "Do You Want to reload this task schedule?", [
        {
          text: "yes",
          onPress: () => {
            for (let data of global.taskList[Item]) {
              data.completed = false;
            }

            setList(global.taskList[Item]);
            addTask(global.taskList[Item].pop().data);
          },
        },
        {
          text: "no",
        },
      ]);
    } else {
      ToastAndroid.show(
        "oops!! You Haven't added task yet",
        ToastAndroid.SHORT
      );
    }
  };

  //--------------------------------------------------------------------
  return (
    <View style={styles.container}>
      <CustomHeader log={HeaderLog} />

      {/* Add Task Component */}
      <View style={styles.mainView}>
        <AddButton addTask={addTask} isTime={isTime} />
        <ReloadButton reloadTask={reloadData} />
        <TaskViewer
          removeTask={removeTask}
          deleteTask={deleteTask}
          list={global.taskList[Item]}
        />
      </View>
    </View>
  );
}

//--------------------------------------------------------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6f6f6",
  },
  mainView: {
    flex: 12,
    paddingBottom: "15%",
  },
});
