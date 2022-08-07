import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { NEWS_API_KEY } from "@env";
import { useDispatch, useSelector } from "react-redux";
import { getNews, setPassingNews } from "../slices/navSlice";
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
  {
    id: 3,
    title: "Bitcon znovu roste!",
    feed: "Bitcoin, elektronická měna budoucnosti, se vyšplhal nad úrověň 120 000 dolarů.",
    screen: "ArticleScreen",
  },
  {
    id: 4,
    title: "Bitcon znovu roste!",
    feed: "Bitcoin, elektronická měna budoucnosti, se vyšplhal nad úrověň 120 000 dolarů.",
    screen: "ArticleScreen",
  },
  {
    id: 5,
    title: "Bitcon znovu roste!",
    feed: "Bitcoin, elektronická měna budoucnosti, se vyšplhal nad úrověň 120 000 dolarů.",
    screen: "ArticleScreen",
  },
  {
    id: 6,
    title: "Bitcon znovu roste!",
    feed: "Bitcoin, elektronická měna budoucnosti, se vyšplhal nad úrověň 120 000 dolarů.",
    screen: "ArticleScreen",
  },
  {
    id: 7,
    title: "Bitcon znovu roste!",
    feed: "Bitcoin, elektronická měna budoucnosti, se vyšplhal nad úrověň 120 000 dolarů.",
    screen: "ArticleScreen",
  },
  {
    id: 8,
    title: "Bitcon znovu roste!",
    feed: "Bitcoin, elektronická měna budoucnosti, se vyšplhal nad úrověň 120 000 dolarů.",
    screen: "ArticleScreen",
  },
];
const NewsScreen = () => {
  const dispatch = useDispatch();
  const reduxNews = useSelector(getNews);
  const [dataFromApi, setDataFromApi] = useState();
  const navigation = useNavigation();

  useEffect(() => {
    const getNewsFromApi = async () => {
      console.log("fetching...");
      fetch(
        `https://newsdata.io/api/1/news?apikey=${NEWS_API_KEY}&country=gb,us&language=en&page=5`
      )
        .then((res) => res.json())
        .then((data) => {
          setDataFromApi(data);
        });
    };
    getNewsFromApi();
  }, []);
  console.log(dataFromApi);

  const handleClick = (url) => {
    Linking.canOpenURL(url).then((supported) => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("BAD URL");
      }
    });
  };

  return (
    <SafeAreaView style={tw`bg-blue-100`}>
      <Text style={tw`text-center p-8 text-[24px] bg-blue-100`}>
        ACTUALITIES
      </Text>

      <FlatList
        data={dataFromApi?.results}
        //keyExtractor={(item) => item.id}
        style={tw`bg-white`}
        renderItem={({ item: { title, content, link } }) =>
          content && (
            <View>
              <TouchableOpacity
                style={tw`p-5`}
                onPress={() => {
                  dispatch(
                    setPassingNews({
                      title: title,
                      content: content,
                      link: link,
                    })
                  );
                  navigation.navigate("SingleNewScreen");
                }}
              >
                <Text style={tw`text-[20px] font-semibold`}>{title}</Text>

                <TouchableOpacity onPress={() => handleClick(link)}>
                  <Text>{link}</Text>
                </TouchableOpacity>

                <Text style={tw`m-2 text-[16px] h-40`} numberOfLines={4}>
                  {content}
                </Text>
              </TouchableOpacity>
              <View style={tw`border-b`}></View>
            </View>
          )
        }
      />
    </SafeAreaView>
  );
};

export default NewsScreen;

const styles = StyleSheet.create({});
