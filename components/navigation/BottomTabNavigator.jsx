import { View } from "react-native";
import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Feed from "../../screens/Feed";
import CreateStory from "../../screens/CreateStory";
import { Ionicons } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

const Tab = createMaterialBottomTabNavigator();

const BottomNavigator = () => (
  <Tab.Navigator
    labeled={false}
    barStyle={{
      backgroundColor: "#7b2cbf",
    }}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused }) => {
        let iconName;
        if (route.name === "Feed") {
          iconName = focused ? "book" : "book-outline";
        } else if (route.name === "CreateStory") {
          iconName = focused ? "create" : "create-outline";
        }

        return (
          <Ionicons
            name={iconName}
            size={RFValue(25)}
            color={focused ? "white" : "#ced4da"}
            style={{
              width: RFValue(25),
              height: RFValue(25),
            }}
          />
        );
      },
    })}
    activeColor="#ffffff"
    inactiveColor="#ced4da"
  >
    <Tab.Screen name="Feed" component={Feed} />
    <Tab.Screen name="CreateStory" component={CreateStory} />
  </Tab.Navigator>
);

const BottomTabNavigator = () => {
  return (
    <View style={{ flex: 1 }}>
      <BottomNavigator />
    </View>
  );
};

export default BottomTabNavigator;
