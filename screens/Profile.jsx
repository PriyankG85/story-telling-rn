import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { getAuth } from "firebase/auth";

const Profile = () => {
  const auth = getAuth();
  const currentUser = auth.currentUser;

  return (
    <View style={styles.container}>
      <View style={styles.greetingTextCont}>
        <Text style={styles.greetingText1}>Welcome</Text>
        <Text style={styles.greetingText2}>{currentUser.displayName}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 150,
    alignItems: "center",
  },

  greetingTextCont: {
    alignItems: "center",
  },

  greetingText1: {
    fontSize: 30,
    fontFamily: "Bubblegum-Sans",
  },

  greetingText2: {
    fontSize: 28,
    paddingLeft: 12,
    fontFamily: "Rowdies-Regular",
  },
});

export default Profile;
