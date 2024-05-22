import { StatusBar } from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import HomeScreen from "../screens/HomeScreen";
import NFTdetails from "../screens/NFTdetails";
import { COLORS } from "../constants";

const App = () => {
  const [fontLoaded] = useFonts({
    InterBold: require("../assets/fonts/Inter-Bold.ttf"),
    InterLight: require("../assets/fonts/Inter-Light.ttf"),
    InterMedium: require("../assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("../assets/fonts/Inter-Regular.ttf"),
    InterSemiBold: require("../assets/fonts/Inter-SemiBold.ttf"),
  });

  if (!fontLoaded) return null;

  const Stack = createNativeStackNavigator();

  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor={COLORS.bg}
        barStyle={"light-content"}
      />
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="WelcomeScreen"
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="NFT-details" component={NFTdetails} />
      </Stack.Navigator>
    </>
  );
};

export default App;
