import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Nav from "../components/Nav";
import TopNews from "../components/TopNews";
import tw from "twrnc";

const HomeScreen = () => {
  return (
    <View>
      <TopNews />
      <Nav />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
