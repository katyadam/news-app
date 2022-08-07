import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";

const BasicInfoScreen = () => {
  return (
    <SafeAreaView>
      <Text style={tw`text-center mb-12 mt-2 text-[30px]`}>Basic Info</Text>
      <Text style={tw`text-center mt-5 text-[24px]`}>
        Hello, My name is Adam Kattan and this is my App. I've started
        developing this App in August 2022. My IDEA is that NEWS shouldn't be
        controlled by any inner organ of centralization. I fully decentralized
        this app, which means everything you add can't be controlled, edited and
        deleted, as all the NEWS should be. Developing this project I used
        React-Native instead of Flutter, because as JavaScript Developer, this
        is much more optimal for me.
      </Text>
    </SafeAreaView>
  );
};

export default BasicInfoScreen;

const styles = StyleSheet.create({});
