import { View, Text, StyleSheet, Alert, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
// import * as Google from "expo-google-app-auth";
import * as Google from "expo-auth-session/providers/google";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithCredential,
} from "firebase/auth";

const Login = () => {
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId:
      "808812086765-l9bsnq4777e39uear12tdtkhtcfgi24n.apps.googleusercontent.com",
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params;

      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const credential = provider.credential(id_token);
      signInWithCredential(auth, credential);
    }
  }, [response]);

  // const signInWithGoogle = async () => {
  //   try {
  //     const result = await Google.logInAsync({
  //       behavior: "web",
  //       androidClientId:
  //         "808812086765-63736vh9grc34fltjg1v923q6hhlm35i.apps.googleusercontent.com",
  //       iosClientId:
  //         "808812086765-pkhcmkumld93f0kecmra596l5v5p1e9q.apps.googleusercontent.com",
  //       scopes: ["profile", "email"],
  //     });
  //   } catch (err) {
  //     Alert.alert(err.message);
  //   }
  // };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signin with Google</Text>
      <TouchableOpacity style={styles.signInBtn}>
        <Text style={styles.btnText}>SignIn</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#edf2f4",
  },

  title: {
    fontSize: 24,
    fontFamily: "Rowdies-Bold",
  },

  signInBtn: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 3,
    backgroundColor: "#48cae4",
  },

  btnText: {
    fontSize: 22,
    fontFamily: "Rowdies-Light",
  },
});

export default Login;
