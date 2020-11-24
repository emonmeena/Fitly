import React, { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { FlatList } from "react-native";
import { View, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import newsAPI from "../../api/newsAPI";
import Article from "./Article";
import ReadArticle from "./ReadArticle";

const ExploreStack = createStackNavigator();

const Explore = () => {
  return (
    <ExploreStack.Navigator>
      <ExploreStack.Screen name="Explore" component={ExploreScreen} />
      <ExploreStack.Screen name="ReadArticle" component={ReadArticle} />
    </ExploreStack.Navigator>
  );
};

const ExploreScreen = ({ navigation }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    articlesAPI();
  });

  const articlesAPI = async () => {
    const response = await newsAPI.get("/everything", {
      params: {
        q: "fitness",
        pageSize: 11,
        sortBy: "relavancy",
      },
    });
    setArticles(response.data.articles);
  };

  return (
    <View style={styles.screenStyle}>
      <FlatList
        keyExtractor={(item) => item.title}
        data={articles}
        renderItem={(itemData) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("ReadArticle", {
                urlToImage: itemData.item.urlToImage,
                content: itemData.item.content,
                title: itemData.item.title,
                author: itemData.item.author,
                description: itemData.item.description
              })
            }
          >
            <Article
              title={itemData.item.title}
              urlToImage={itemData.item.urlToImage}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screenStyle: {
    backgroundColor: "white",
    paddingHorizontal: 10,
  },
  headingStyle: {
    fontSize: 20,
    padding: 10,
  },
  searchBox: {
    backgroundColor: "#F0EEEE",
  },
  searchBoxContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#F0EEEE",
  },
  title: {
    fontSize: 40,
  },
});

export default Explore;
