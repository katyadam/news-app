import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { FlatList, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setUser } from "../slices/navSlice";

const navData = [
  {
    id: 1,
    title: "ACTUALITIES",
    icon: "newspaper-outline",
    screen: "NewsScreen",
  },
  {
    id: 2,
    title: "BASIC INFO",
    icon: "information-outline",
    screen: "BasicInfoScreen",
  },
];

const profData = [
  {
    id: 1,
    title: "PROFILE",
    icon: "person-outline",
    screen: "ProfileScreen",
  },
  {
    id: 2,
    title: "SETTINGS",
    icon: "settings-outline",
    screen: "SettingsScreen",
  },
];

const user = {
  id: 1,
  name: "User",
  role: "User",
};

const Nav = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={tw`h-full`}>
      <View>
        <Text style={tw`text-center text-[24px]`}>
          Welcome <Text style={tw`text-blue-800`}>{user.name}</Text>
        </Text>
        <View style={tw`mt-6`}>
          <FlatList
            horizontal
            data={profData}
            keyExtractor={(item) => item.id}
            renderItem={({ item: { title, icon, screen } }) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(screen);
                  dispatch(setUser(user));
                }}
                style={tw`pl-6 pb-3 pt-4 bg-blue-100 m-2 w-45 shadow-lg`}
              >
                <View>
                  <Text style={tw`mt-2 text-lg font-semibold`}>{title}</Text>
                  <Icon
                    type="ionicon"
                    name={icon}
                    color="white"
                    style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                  />
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
        <View style={tw`p-5 border-b border-blue-800`} />
      </View>
      <View style={tw`mt-10`}>
        <FlatList
          horizontal
          data={navData}
          keyExtractor={(item) => item.id}
          renderItem={({ item: { title, icon, screen } }) => (
            <TouchableOpacity
              style={tw`pl-6 pb-3 pt-4 bg-gray-200 m-2 w-45 shadow-lg`}
              onPress={() => navigation.navigate(screen)}
            >
              <View>
                <Text style={tw`mt-2 text-lg font-semibold`}>{title}</Text>
                <Icon
                  type="ionicon"
                  name={icon}
                  color="white"
                  style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                />
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Nav;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
