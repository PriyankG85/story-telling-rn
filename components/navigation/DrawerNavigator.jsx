import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigator from "./StackNavigator";
import Profile from "../../screens/Profile";
import Login from "../../screens/Login";

const Drawer = createDrawerNavigator();

const DrawerNavigator = (authStatus) => (
  <Drawer.Navigator
    screenOptions={{
      drawerAllowFontScaling: true,
      drawerActiveBackgroundColor: "#03045e",
      drawerInactiveBackgroundColor: "#023e8a",
      drawerActiveTintColor: "white",
      drawerInactiveTintColor: "white",

      headerTintColor: "white",

      headerShown: authStatus !== "signedIn",

      headerTitleStyle: {
        fontFamily: "Rowdies-Regular",
      },

      headerStyle: {
        backgroundColor: "#7b2cbf",
      },

      drawerStyle: {
        backgroundColor: "#8187dc",
        width: 220,
      },
    }}
    initialRouteName={authStatus === "signedIn" ? "Home" : "Login"}
  >
    {authStatus === "signedIn" ? (
      <>
        <Drawer.Screen name="Home" component={StackNavigator} />
        <Drawer.Screen name="Profile" component={Profile} />
      </>
    ) : (
      <>
        <Drawer.Screen name="Login" component={Login} />
      </>
    )}
  </Drawer.Navigator>
);

export default DrawerNavigator;
