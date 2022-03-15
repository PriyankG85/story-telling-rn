import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./BottomTabNavigator";
import StoryScreen from "../../screens/StoryPreview";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="TabNavigator"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
      <Stack.Screen name="StoryScreen" component={StoryScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
