import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";
import * as Speech from "expo-speech";

const StoryScreen = ({ route }) => {
  const [speakerColor, setSpeakerColor] = useState("gray");
  const [speakerIcon, setSpeakerIcon] = useState("volume-high-outline");

  const handleSpeech = async () => {
    speakerColor === "gray"
      ? setSpeakerColor("#ee8249")
      : setSpeakerColor("gray");

    if (speakerColor === "gray") {
      Speech.speak(
        `${route.params.story.title} by ${route.params.story.author}`
      );
      Speech.speak(route.params.story.story);
      Speech.speak("The moral of the story is!");
      Speech.speak(route.params.story.moral);
    } else {
      Speech.stop();
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.droidSafeArea} />
      <View style={styles.appTitle}>
        <View style={styles.appIcon}>
          <Image
            source={require("../assets/logo.png")}
            style={styles.iconImage}
          ></Image>
        </View>
        <View style={styles.appTitleTextContainer}>
          <Text style={styles.appTitleText}>Storytelling App</Text>
        </View>
      </View>
      <View style={styles.storyContainer}>
        <ScrollView style={styles.storyCard}>
          <Image
            source={require("../assets/story_image_1.png")}
            style={styles.image}
          ></Image>

          <View style={styles.dataContainer}>
            <View style={styles.titleTextContainer}>
              <Text style={styles.storyTitleText}>
                {route.params.story.title}
              </Text>
              <Text style={styles.storyAuthorText}>
                {route.params.story.author}
              </Text>
              <Text style={styles.storyAuthorText}>
                {route.params.story.created_on}
              </Text>
            </View>
            <View style={styles.iconContainer}>
              <TouchableOpacity onPress={handleSpeech}>
                <Ionicons
                  name={speakerIcon}
                  size={RFValue(30)}
                  color={speakerColor}
                  style={{ margin: RFValue(15) }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.storyTextContainer}>
            <Text style={styles.storyText}>{route.params.story.story}</Text>
            <Text style={styles.moralText}>
              Moral - {route.params.story.moral}
            </Text>
          </View>
          <View style={styles.actionContainer}>
            <View style={styles.likeButton}>
              <Ionicons name={"heart"} size={RFValue(30)} color={"white"} />
              <Text style={styles.likeText}>12k</Text>
            </View>
          </View>
        </ScrollView>
      </View>
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
    flex: 0.07,
    flexDirection: "row",
  },
  appIcon: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
  },
  iconImage: {
    width: "100%",
    height: "100%",
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
  storyContainer: {
    flex: 1,
  },
  storyCard: {
    margin: RFValue(20),
    backgroundColor: "#2f345d",
    borderRadius: RFValue(20),
  },
  image: {
    width: "100%",
    alignSelf: "center",
    height: RFValue(200),
    borderTopLeftRadius: RFValue(20),
    borderTopRightRadius: RFValue(20),
    resizeMode: "contain",
  },
  dataContainer: {
    flexDirection: "row",
    padding: RFValue(20),
  },
  titleTextContainer: {
    flex: 0.8,
  },
  storyTitleText: {
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(25),
    color: "white",
  },
  storyAuthorText: {
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(18),
    color: "white",
  },
  iconContainer: {
    flex: 0.2,
  },
  storyTextContainer: {
    padding: RFValue(20),
  },
  storyText: {
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(15),
    color: "white",
  },
  moralText: {
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(20),
    color: "white",
  },
  actionContainer: {
    justifyContent: "center",
    alignItems: "center",
    margin: RFValue(10),
  },
  likeButton: {
    width: RFValue(160),
    height: RFValue(40),
    flexDirection: "row",
    backgroundColor: "#eb3948",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: RFValue(30),
  },
  likeText: {
    color: "white",
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(25),
    marginLeft: RFValue(5),
  },
});

export default StoryScreen;
