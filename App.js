import React from "react";
import { StatusBar } from "expo-status-bar";
import { useFonts, Amiri_400Regular, Amiri_700Bold_Italic } from "@expo-google-fonts/amiri";
import { Navigation } from "./src/navigation/navigation";


const App = () => {

  const [fontsLoaded] = useFonts({
    Amiri_400Regular,
    Amiri_700Bold_Italic,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <Navigation />
      <StatusBar style="auto" />
    </>
  );
};

export default App;
