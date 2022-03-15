import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import StoryCard from "../components/StoryCard";

import { FlatList } from "react-native-gesture-handler";

let stories = require("../temp_stories.json");

const Feed = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.droidSafeArea} />
      <View style={styles.appTitle}>
        <View style={styles.appIcon}>
          <Image
            source={require("../assets/logo.png")}
            style={styles.iconImage}
          />
        </View>
        <View style={styles.appTitleTextContainer}>
          <Text style={styles.appTitleText}>Storytelling App</Text>
        </View>
      </View>
      <View style={styles.cardContainer}>
        <FlatList
          data={stories}
          keyExtractor={(item, i) => i}
          renderItem={({ item }) => (
            <StoryCard story={item} navigation={navigation} />
          )}
        />
      </View>
      <View style={{ flex: 0.08 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15193c",
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35),
  },
  appTitle: {
    paddingVertical: 5,
    flexDirection: "row",
  },
  appIcon: {
    flex: 0.25,
    justifyContent: "center",
    alignItems: "center",
  },
  iconImage: {
    width: 35,
    height: 35,
    resizeMode: "contain",
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: "center",
  },
  appTitleText: {
    color: "white",
    fontSize: RFValue(28),
    fontFamily: "Bubblegum-Sans",
  },
  cardContainer: {
    flex: 1,
  },
});

export default Feed;
