import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithCredential,
} from "firebase/auth";

WebBrowser.maybeCompleteAuthSession();

const Login = () => {
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId:
      "808812086765-l9bsnq4777e39uear12tdtkhtcfgi24n.apps.googleusercontent.com",
    scopes: ["profile", "email"],
  });

  const signIn = async (idToken) => {
    const auth = getAuth();
    const credential = GoogleAuthProvider.credential(idToken);

    await signInWithCredential(auth, credential);
  };

  useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params;
      signIn(id_token);
    }
  }, [response]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signin with Google</Text>
      <TouchableOpacity
        disabled={!request}
        onPress={() => request && promptAsync()}
        style={styles.signInBtn}
      >
        <Text style={styles.btnText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 160,
    backgroundColor: "#edf2f4",
    alignItems: "center",
  },

  title: {
    fontSize: 27,
    fontFamily: "Rowdies-Regular",
  },

  signInBtn: {
    marginTop: 50,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "#48cae4",
  },

  btnText: {
    fontSize: 22,
    color: "#ffffff",
    fontFamily: "Rowdies-Light",
  },
});

export default Login;
