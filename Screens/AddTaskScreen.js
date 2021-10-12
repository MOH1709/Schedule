//---------------------------------- Default Imports ----------------------------------
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import {
  View,
  Text,
  LogBox,
  Keyboard,
  TextInput,
  StyleSheet,
  ToastAndroid,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";

//---------------------------------- Custom Imports ----------------------------------
import { CustomHeader } from "../Components";
import { COLOR, SIZE } from "../Constants";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useEffect } from "react";

//---------------------------------- Exported components ----------------------------------
export default function AddTaskScreen() {
  const navigation = useNavigation();
  const route = useRoute();

  const [text, setText] = useState("");
  const [time, setTime] = useState(0);
  const [displayTimeInput, setDisplayTimeInput] = useState(false);

  LogBox.ignoreAllLogs();

  const handleDateSelection = (date) => {
    setTime({
      hour: date.getHours(),
      minute: date.getMinutes(),
    });
    setDisplayTimeInput(false);
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <CustomHeader
          log={`Press and Hold to \n\t "permanently Delete" file`}
        />

        <View style={{ flex: 12 }}>
          <TextInput
            multiline
            blurOnSubmit={true}
            onSubmitEditing={() => {
              setDisplayTimeInput(true);
            }}
            autoFocus={true}
            style={styles.textInput}
            placeholder={"Type Here"}
            onChangeText={(text) => setText(text)}
          />

          <View style={styles.otherInputs}>
            {route.params.isTime && (
              <TouchableOpacity
                style={styles.timeButton}
                onPress={() => {
                  setDisplayTimeInput(true);
                }}
              >
                <Text>Time</Text>
              </TouchableOpacity>
            )}

            <TouchableOpacity
              style={styles.addButton}
              onPress={() => {
                if (text !== "") {
                  if (!route.params.isTime || time) {
                    route.params.addTask(text, time);
                    navigation.goBack();
                  } else {
                    ToastAndroid.show(
                      "Oops! You Forgot to set Time",
                      ToastAndroid.SHORT
                    );
                  }
                } else {
                  ToastAndroid.show(
                    "oops!! You Left Text input empty",
                    ToastAndroid.SHORT
                  );
                }
              }}
            >
              <Text>Add</Text>
            </TouchableOpacity>
          </View>

          <DateTimePickerModal
            isVisible={displayTimeInput && route.params.isTime}
            mode="time"
            onConfirm={handleDateSelection}
            onCancel={() => setDisplayTimeInput(false)}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

//--------------------------------------------------------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    margin: 30,
    padding: 20,
    fontSize: 20,
    elevation: 10,
    borderRadius: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: COLOR.secondary,
    backgroundColor: COLOR.primary,
    height: SIZE.height / 3,
  },
  otherInputs: {
    flexDirection: "row",
  },
  addButton: {
    flex: 1,
    margin: 20,
    elevation: 10,
    alignItems: "center",
    justifyContent: "center",
    color: COLOR.buttonIcon,
    backgroundColor: COLOR.buttonBg,
    height: SIZE.height / 15,
    borderRadius: SIZE.height / 15,
  },
  timeButton: {
    flex: 1,
    margin: 20,
    elevation: 10,
    alignItems: "center",
    justifyContent: "center",
    color: COLOR.buttonIcon,
    backgroundColor: COLOR.buttonBg,
    height: SIZE.height / 15,
    borderRadius: SIZE.height / 15,
  },
});
