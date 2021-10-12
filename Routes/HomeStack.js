// ------------------ Default Imports --------------------------------
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

// ------------------ Custom Imports --------------------------------
import {
  Project,
  DailyRoutine,
  Remainder,
  Unplanned,
  Unrevealed,
  List,
} from "../Screens/MainView";
import BottomNavBar from "./BottomNavBar";
import AddTaskScreen from "../Screens/AddTaskScreen";
import TaskScreen from "../Screens/TaskScreen";

//---------------------------------- Exported Component ----------------------------------
export default function Navigator() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={BottomNavBar} />
        <Stack.Screen name="ElementNo0" component={DailyRoutine} />
        <Stack.Screen name="ElementNo1" component={List} />
        <Stack.Screen name="ElementNo2" component={Project} />
        <Stack.Screen name="ElementNo3" component={Remainder} />
        <Stack.Screen name="ElementNo4" component={Unrevealed} />
        <Stack.Screen name="ElementNo5" component={Unplanned} />
        <Stack.Screen name="TaskScreen" component={TaskScreen} />
        <Stack.Screen name="AddTaskScreen" component={AddTaskScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
