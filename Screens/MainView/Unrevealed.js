//---------------------------------- Default Imports ----------------------------------
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";

//---------------------------------- Custom Imports ----------------------------------
import { COLOR, SIZE } from "../../Constants";

let login = {
  password: "",
  isLoggedIn: false,
};

//---------------------------------- Exported Component ----------------------------------
export default function Unrevealed() {
  const navigation = useNavigation();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  let confirmPass;

  return (
    <View style={styles.container}>
      <View style={styles.passwordPage}>
        <TextInput
          autoFocus={true}
          secureTextEntry={true}
          returnKeyType={"next"}
          onSubmitEditing={() => {
            confirmPass.focus();
          }}
          blurOnSubmit={false}
          style={styles.textInput}
          placeholder={`Enter your Password`}
          onChangeText={(text) => setPassword(text)}
        />
        {!login.isLoggedIn && (
          <TextInput
            secureTextEntry={true}
            ref={(input) => {
              confirmPass = input;
            }}
            style={styles.textInput}
            placeholder={`Enter your confirm Password`}
            onChangeText={(text) => setConfirmPassword(text)}
          />
        )}

        {/* ----------------------------------- Enter Button --------------------------------- */}
        <View style={styles.buttons}>
          {login.isLoggedIn && (
            <TouchableOpacity
              style={styles.buttonBg}
              onPress={() => {
                if (password === login.password) {
                  login.isLoggedIn = false;
                  setConfirmPassword(password);
                } else {
                  ToastAndroid.show(
                    "Please Enter Your Previous Password first",
                    ToastAndroid.SHORT
                  );
                }
              }}
            >
              <Text style={styles.buttonText}>Change</Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity
            style={styles.buttonBg}
            onPress={() => {
              if (login.isLoggedIn) {
                if (login.password === password) {
                  navigation.navigate("TaskScreen", {
                    Item: "ElementNo4",
                    HeaderLog: `ok`,
                    isLogin: true,
                  });
                } else {
                  ToastAndroid.show(
                    "Password is Incorrect!!",
                    ToastAndroid.SHORT
                  );
                }
              } else if (password.length < 4 || confirmPassword < 4) {
                ToastAndroid.show(
                  "Password should be \n\t 4 character long",
                  ToastAndroid.SHORT
                );
              } else if (confirmPassword === password) {
                login.password = password;
                login.isLoggedIn = true;
                navigation.navigate("TaskScreen", {
                  Item: "ElementNo4",
                  HeaderLog: `Task of which you get \n\t notify with Hidden content`,
                  goBackTwice: true,
                });
              } else {
                ToastAndroid.show(
                  "oops! Both passwords are different",
                  ToastAndroid.CENTER
                );
              }
            }}
          >
            <Text style={styles.buttonText}>
              {login.isLoggedIn ? "ENTER" : "SAVE"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

//--------------------------------------------------------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  passwordPage: {
    width: "90%",
    elevation: 10,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    height: SIZE.height / 2,
    backgroundColor: COLOR.primary,
  },
  textInput: {
    width: "70%",
    textAlign: "left",
    padding: 15,
    elevation: 10,
    borderRadius: 20,
    marginVertical: 30,
    backgroundColor: "#f0f0f0",
  },
  buttons: {
    flexDirection: "row",
  },
  buttonBg: {
    width: "30%",
    margin: 5,
    height: 40,
    elevation: 10,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLOR.buttonBg,
  },
  buttonText: {
    color: COLOR.buttonIcon,
  },
});
