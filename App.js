import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import HomeScreen from "./screens/HomeScreen";
import { store } from "./store";
import tw from "twrnc";
import { SafeAreaView } from "react-native-web";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import ProfileScreen from "./screens/ProfileScreen";
import SettingsScreen from "./screens/SettingsScreen";
import NewsScreen from "./screens/NewsScreen";
import BasicInfoScreen from "./screens/BasicInfoScreen";
import SingleNewScreen from "./screens/SingleNewScreen";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ProfileScreen"
            component={ProfileScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SettingsScreen"
            component={SettingsScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="NewsScreen"
            component={NewsScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="BasicInfoScreen"
            component={BasicInfoScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SingleNewScreen"
            component={SingleNewScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
