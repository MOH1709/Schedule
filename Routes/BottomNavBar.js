//---------------------------------- Default Imports ----------------------------------
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//---------------------------------- Custom Imports ----------------------------------
import { Home, Outcome, Share } from "../Screens/BottomNavigation";
import { COLOR, SIZE } from "../Constants";

//---------------------------------- Exported Component ----------------------------------
export default function BottomNavBar() {
  const Tab = createBottomTabNavigator();

  const navLogoStyle = {
    width: SIZE.width / 7,
    height: SIZE.width / 7,
    marginBottom: SIZE.width / 10.5,
    textAlign: "center",
    backgroundColor: COLOR.buttonBg,
    paddingTop: SIZE.width / 35,
    borderRadius: SIZE.width / 7,
    elevation: 14,
  };

  //---------------------------------- Tab Navigator ----------------------------------
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        style: {
          backgroundColor: COLOR.primary,
          borderTopRightRadius: 40,
          position: "absolute",
          borderTopLeftRadius: 40,
        },
        showLabel: false,
      }}
    >
      <Tab.Screen
        name="Outcome"
        component={Outcome}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="piechart"
              size={24}
              color={COLOR.buttonIcon}
              style={focused ? navLogoStyle : {}}
            />
          ),
          tabBarBadge: null,
        }}
      />

      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="home"
              size={24}
              color={COLOR.buttonIcon}
              style={focused ? navLogoStyle : {}}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Share"
        component={Share}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="sharealt"
              size={24}
              color={COLOR.buttonIcon}
              style={focused ? navLogoStyle : {}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
