import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import tw from "twrnc";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { getNews, selectPassingNews } from "../slices/navSlice";
import { useNavigation } from "@react-navigation/native";
const news = [
  {
    id: 1,
    title: "Babiš zase kradl!",
    feed: "Kdo jiný něž Andrej Babiš musel ukrást Zemanovi becherovku.",
    screen: "ArticleScreen",
  },
  {
    id: 2,
    title: "Bitcon znovu roste!",
    feed: "Bitcoin, elektronická měna budoucnosti, se vyšplhal nad úrověň 120 000 dolarů.",
    screen: "ArticleScreen",
  },
];

const TopNews = () => {
  const news = useSelector(selectPassingNews);
  const navigation = useNavigation();
  console.log(news);
  return (
    <SafeAreaView>
      <Text style={tw`text-center text-[16px] p-2`}>Recently viewed</Text>
      <View>
        <TouchableOpacity
          style={tw`p-3 bg-gray-200 mb-2`}
          onPress={() => navigation.navigate("SingleNewScreen")}
        >
          <Text style={tw`text-[20px] font-semibold`}>{news.title}</Text>
          <Text style={tw`m-2 text-[16px]`} numberOfLines={1}>
            {news.content}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default TopNews;

const styles = StyleSheet.create({});
