import { StyleSheet, Text, View, ScrollView, StatusBar } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectPassingNews } from "../slices/navSlice";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";

const SingleNewScreen = () => {
  const passedNews = useSelector(selectPassingNews);
  console.log(passedNews);
  return (
    <View style={styles.container}>
      <Text style={tw`my-8 text-center text-[24px] p-5`}>
        {passedNews.title}
      </Text>
      <ScrollView>
        <Text style={tw`p-5 text-[16px]`}>{passedNews.content}</Text>
      </ScrollView>
    </View>
  );
};

export default SingleNewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: "pink",
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});
