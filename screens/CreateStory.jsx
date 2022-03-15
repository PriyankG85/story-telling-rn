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
  TextInput,
  Dimensions,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import DropDownPicker from "react-native-dropdown-picker";

const CreateStory = () => {
  const [previewImage, setPreviewImage] = useState("image_1");
  const [dropDownHeight, setDropDownHeight] = useState(40);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [story, setStory] = useState("");
  const [moral, setMoral] = useState("");

  const previewImages = {
    image_1: require("../assets/story_image_1.png"),
    image_2: require("../assets/story_image_2.png"),
    image_3: require("../assets/story_image_3.png"),
    image_4: require("../assets/story_image_4.png"),
    image_5: require("../assets/story_image_5.png"),
  };

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
          <Text style={styles.appTitleText}>New Story</Text>
        </View>
      </View>
      <View style={styles.fieldsContainer}>
        <ScrollView>
          <Image
            source={previewImages[previewImage]}
            style={styles.previewImage}
          />
          <View style={{ height: RFValue(dropDownHeight) }}>
            <DropDownPicker
              items={[
                { label: "Image 1", value: "image_1" },
                { label: "Image 2", value: "image_2" },
                { label: "Image 3", value: "image_3" },
                { label: "Image 4", value: "image_4" },
                { label: "Image 5", value: "image_5" },
              ]}
              defaultValue={previewImage}
              containerStyle={{
                height: 40,
                marginBottom: 10,
              }}
              onOpen={() => setDropDownHeight(170)}
              onClose={() => setDropDownHeight(40)}
              style={{
                backgroundColor: "transparent",
                borderColor: "#2f345d",
                borderWidth: 2,
                borderRadius: 10,
              }}
              itemStyle={{
                justifyContent: "flex-start",
              }}
              dropDownStyle={{ backgroundColor: "#2f345d", borderWidth: 0 }}
              labelStyle={{
                color: "#ffffff",
                fontSize: 20,
                fontFamily: "Bubblegum-Sans",
              }}
              arrowColor={"#ffffff"}
              arrowSize={RFValue(22)}
              arrowStyle={{
                width: 22,
                height: 22,
              }}
              onChangeItem={(item) => setPreviewImage(item.value)}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.title}
              value={title}
              onChangeText={(e) => setTitle(e)}
              placeholder={"Enter the Story Title"}
              placeholderTextColor={"#6c757d"}
            />
            <TextInput
              style={styles.desc}
              value={desc}
              onChangeText={(e) => setDesc(e)}
              placeholder={"Enter the Story description"}
              placeholderTextColor={"#6c757d"}
            />
            <TextInput
              style={styles.story}
              value={story}
              onChangeText={(e) => setStory(e)}
              placeholder={"Enter Your Story"}
              placeholderTextColor={"#6c757d"}
            />
            <TextInput
              style={styles.moral}
              value={moral}
              onChangeText={(e) => setMoral(e)}
              placeholder={"Enter the Story Moral"}
              placeholderTextColor={"#6c757d"}
            />
          </View>
        </ScrollView>
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
    color: "#ffffff",
    fontSize: RFValue(28),
    fontFamily: "Bubblegum-Sans",
  },
  fieldsContainer: {
    flex: 0.85,
    padding: 10,
  },
  previewImage: {
    width: "93%",
    height: RFValue(250),
    alignSelf: "center",
    borderRadius: RFValue(10),
    marginVertical: RFValue(10),
    resizeMode: "contain",
  },
  inputContainer: {
    marginTop: 10,
  },
  title: {
    padding: 10,
    fontSize: 20,
    color: "#ffffff",
    fontWeight: "bold",
    fontFamily: "Bubblegum-Sans",
  },
  desc: {
    padding: 10,
    fontSize: 20,
    color: "#ffffff",
    fontWeight: "bold",
    fontFamily: "Bubblegum-Sans",
  },
  story: {
    padding: 10,
    fontSize: 20,
    color: "#ffffff",
    fontWeight: "bold",
    fontFamily: "Bubblegum-Sans",
  },
  moral: {
    padding: 10,
    fontSize: 20,
    color: "#ffffff",
    fontWeight: "bold",
    fontFamily: "Bubblegum-Sans",
  },
});

export default CreateStory;
