// ---------------------- Default Imports ----------------------------------------
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

// ---------------------- Custom Imports ----------------------------------------
import { CustomHeader } from "../../Components";
import { COLOR, SIZE } from "../../Constants";

export default function Home() {
  const navigation = useNavigation();
  const items = [
    {
      key: "0",
      title: "Daily Routine",
      img: (
        <AntDesign
          name="barschart"
          size={30}
          color="#4a274f"
          style={{
            backgroundColor: "#f0a07c",
            ...styles.logo,
          }}
        />
      ),
    },
    {
      key: "1",
      title: "Temporary \n\t\t\t List",
      img: (
        <AntDesign
          name="bars"
          size={30}
          color="#96cf24"
          style={{
            backgroundColor: "#f7f7f7",
            ...styles.logo,
          }}
        />
      ),
    },
    {
      key: "2",
      title: "Project's",
      img: (
        <AntDesign
          name="star"
          size={30}
          color="gold"
          style={{
            backgroundColor: "#3c1a5b",
            ...styles.logo,
          }}
        />
      ),
    },
    {
      key: "3",
      title: "Remainder",
      img: (
        <AntDesign
          name="calendar"
          size={30}
          color="#e2d1f9"
          style={{
            backgroundColor: "#317773",
            ...styles.logo,
          }}
        />
      ),
    },
    {
      key: "4",
      title: "Unrevealed \n\t    plans",
      img: (
        <AntDesign
          name="key"
          size={30}
          color="#050505"
          style={{
            backgroundColor: "#8aaae5",
            ...styles.logo,
          }}
        />
      ),
    },
    {
      key: "5",
      title: `Unplanned\n    Tasks`,
      img: (
        <AntDesign
          name="exclamation"
          size={30}
          color="#ec4d37"
          style={{
            backgroundColor: "#1d1b1b",
            ...styles.logo,
          }}
        />
      ),
    },
  ];

  // ----------------------- Event Handlers ------------------------------------
  const pressHandler = (index) => {
    navigation.navigate(`ElementNo${index}`);
  };

  // -------------------------------- Returned Component ----------------------------------
  return (
    <View style={styles.container}>
      <CustomHeader
        log={`Even a weak with plan can \n\t defeat a strong without plan`}
      />

      {/* ---------------------- Main View ------------------------- */}
      <View style={styles.mainView}>
        <FlatList
          data={items}
          numColumns={2}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.item}
              onPress={() => pressHandler(item.key)}
            >
              <View style={styles.logoContainer}>{item.img}</View>
              <Text style={styles.text}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

//--------------------------------------------------------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainView: {
    flex: 12,
    paddingBottom: 40,
  },
  item: {
    flex: 1,
    elevation: 10,
    borderRadius: 20,
    marginHorizontal: "6%",
    marginVertical: "4%",
    alignItems: "center",
    justifyContent: "center",
    height: SIZE.height / 4.3,
    backgroundColor: COLOR.primary,
  },
  logo: {
    elevation: 26,
    borderRadius: 50,
    textAlign: "center",
    width: SIZE.width / 6,
    height: SIZE.width / 6,
    paddingTop: SIZE.height / 50,
    marginBottom: SIZE.width / 7.8,
  },
  logoContainer: {
    flex: 1,
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    flex: 0.8,
    fontWeight: "bold",
  },
});
