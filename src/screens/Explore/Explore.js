import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import newsAPI from "../../api/newsAPI";
import Article from "./Article";

const Explore = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    exploreAPI();
  });

  const exploreAPI = async () => {
    const response = await newsAPI.get("/everything", {
      params: {
        q: "fitness AND exercise AND yoga",
        sortBy: "relavancy",
      },
    });
    setArticles(response.data.articles);
  };

  return (
    <View style={styles.randm}>
      <View>
        <Text style={styles.headingStyle}>Collections</Text>
      </View>
      <View>
        <FlatList
          data={articles}
          renderItem={(itemData) => (
            <Article
              key={itemData.index}
              title={itemData.item.title}
              urlToImage={itemData.item.urlToImage}
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    headingStyle: {
    fontSize: 20,
  },
  randm: {},
});

export default Explore;
