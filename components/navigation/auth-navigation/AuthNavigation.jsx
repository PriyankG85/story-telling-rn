import { StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import AppLoading from "expo-app-loading";
import DrawerNavigator from "../DrawerNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import * as Font from "expo-font";
import Login from "../../../screens/Login";
import Loading from "../../../screens/Loading";
import { createStackNavigator } from "@react-navigation/stack";

const AuthNavigation = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [fontLoaded, setFontLoaded] = useState(false);

  const loaded = Font.loadAsync({
    "Bubblegum-Sans": require("../../../assets/fonts/BubblegumSans-Regular.ttf"),
    "Rowdies-Bold": require("../../../assets/fonts/Rowdies-Bold.ttf"),
    "Rowdies-Regular": require("../../../assets/fonts/Rowdies-Regular.ttf"),
    "Rowdies-Light": require("../../../assets/fonts/Rowdies-Light.ttf"),
  });

  loaded.then(() => setFontLoaded(true));

  useEffect(() => {
    onAuthStateChanged(getAuth(), (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
  }, []);

  const Tab = createStackNavigator();

  if (loading || !fontLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      {!currentUser ? (
        <Login />
      ) : (
        <NavigationContainer style={styles.container}>
          <DrawerNavigator />
          <StatusBar style="light" />
        </NavigationContainer>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8187dc",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AuthNavigation;
