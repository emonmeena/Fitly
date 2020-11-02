import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native";
import { FlatList } from "react-native";
import { StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";
import newsAPI from "../../api/newsAPI";
import unsplashAPI from "../../api/unsplashAPI";
import Article from "./Article";
import Collection from './Collection'

const Explore = () => {
  const [articles, setArticles] = useState([]);
  const [collections, setCollections] = useState([]);
  const [exploreMore, setExploreMore] = useState([]);
  const titles = ['Diet', 'Yoga', 'Fitness', 'Exercise', 'Meditation']

  useEffect(() => {
    collectionAPI();
    // articlesAPI();
    exploreMoreAPI();
  });

  const collectionAPI = async () => {
    const response = await unsplashAPI.get('/search/photos', {
      params: {
        query: 'health',
        per_page: 4,
      },
    });
    setCollections(response.data.results)
  };


  const articlesAPI = async () => {
    const response = await newsAPI.get('/everything', {
      params: {
        q: 'exercise AND fitness AND yoga AND diet',
        pageSize: 11,
        sortBy: 'relavancy',
      },
    });
    setArticles(response.data.articles);
  };

  const exploreMoreAPI = async () => {
    const response = await unsplashAPI.get('/search/photos', {
      params: {
        query: 'exercise',
        per_page: 5,

      },
    });
    setExploreMore(response.data.results)
  };

  return (
    <View style={styles.screenStyle}>
    <View>
      <Searchbar placeholder="Search your interest" />
    </View>
    <ScrollView>
      <View>
        <Text style={styles.headingStyle}>Collections</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} >
          {collections.map((image, index) => (
                <Collection
                key={image.id}
                urlToImage={image.urls.small}
                title={titles[index]}
                />
            ))}
           
        </ScrollView>
      </View>
      <View>
        <Text style={styles.headingStyle}>Articles For You</Text>
            {articles.map((article, index) => (
                <Article
                key={index}
                title={article.title}
                urlToImage={article.urlToImage}
                />
            ))}
      </View>
      <View>
        <Text style={styles.headingStyle}>Explore More</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} >
        {exploreMore.map((image) => (
                <Collection
                key={image.id}
                urlToImage={image.urls.small}
                />
            ))}
        </ScrollView>
      </View>
      <View>
      <Text>d2kvv</Text>
    </View>
    </ScrollView>
    
    </View>
  );
};

const styles = StyleSheet.create({
    screenStyle: {
        backgroundColor: "white",
    },
    headingStyle: {
    fontSize: 20,
    padding: 10,
  },
  collectionContainer: {
  }
});

export default Explore;
