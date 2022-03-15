import React from "react";
import { registerRootComponent } from "expo";
import AuthNavigation from "./components/navigation/auth-navigation/AuthNavigation";

function App() {
  return <AuthNavigation />;
}

registerRootComponent(App);
