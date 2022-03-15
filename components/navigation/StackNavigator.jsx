import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./BottomTabNavigator";
import StoryScreen from "../../screens/StoryPreview";
import Loading from "../../screens/Loading";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Loading"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Loading" component={Loading} />
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
      <Stack.Screen name="StoryScreen" component={StoryScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
