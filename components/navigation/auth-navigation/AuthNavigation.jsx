import { StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import AppLoading from "expo-app-loading";
import DrawerNavigator from "../DrawerNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import * as Font from "expo-font";

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

  const checkAuthStatus = () => {
    onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
  };

  useEffect(() => checkAuthStatus(), []);

  if (loading || !fontLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer style={styles.container}>
      {!currentUser ? (
        <DrawerNavigator authStatus={"signedOut"} />
      ) : (
        <DrawerNavigator authStatus={"signedIn"} />
      )}
      <StatusBar style="dark" />
    </NavigationContainer>
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
