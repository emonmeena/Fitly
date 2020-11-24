import React, { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { FlatList } from "react-native";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import newsAPI from "../../api/newsAPI";
import unsplashAPI from "../../api/unsplashAPI";
import YogaArticle from "./Article";
import ReadArticle from "./ReadArticle";
import Axios from "axios";
import Collection from './Collection'

const LifeStyleStack = createStackNavigator();

const LifeStyle = () => {
  return (
    <LifeStyleStack.Navigator>
      <LifeStyleStack.Screen name="LifeStyle" component={LifeStyleScreen} />
      <LifeStyleStack.Screen name="ReadArticle" component={ReadArticle} />
    </LifeStyleStack.Navigator>
  );
};

const LifeStyleScreen = ({ navigation }) => {
  const [articles, setArticles] = useState([]);
  const [collections, setCollections] = useState([]);
  const [exploreMore, setExploreMore] = useState([]);
  const titles = [];

  useEffect(() => {
    // collectionAPI();
    // articlesAPI();
    // exploreMoreAPI();
  });

  const collectionAPI = async () => {
    const response = await unsplashAPI.get("/search/photos", {
      params: {
        query: "health",
        per_page: 4,
      },
    });
    setCollections(response.data.results);
  };

  const articlesAPI = async () => {
    const response = await Axios.get('https://raw.githubusercontent.com/Stuwert/yoga-builder/staging/poses.json').then(res=>{
    setArticles(res.data);
    })
    // setArticles(response.data);
  };

  const exploreMoreAPI = async () => {
    const response = await unsplashAPI.get("/search/photos", {
      params: {
        query: "exercise",
        per_page: 4,
      },
    });
    setExploreMore(response.data.results);
  };
  // console.log(props);

  return (
    <View style={styles.screenStyle}>
      <View style={styles.searchBoxContainer}>
      </View>
      <ScrollView>
      <View>
          <Text style={styles.headingStyle}>Article Collections</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {articleCollections.map((article, index) => (
              <Collection
                leftMargin={index == 0 ? 10 : 0}
                key={index}
                urlToImage={article.image}
                title={article.title}
              />
            ))}
          </ScrollView>
        </View>
      <View>
          <Text style={styles.headingStyle}></Text>
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
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {exploreMore.map((image, index) => (
              <Collection
                leftMargin={index == 0 ? 10 : 0}
                key={image.id}
                urlToImage={image.urls.small}
                title={titles[index]}
              />
            ))}
          </ScrollView>
        </View>
      </ScrollView>
      {/* <FlatList
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
            <YogaArticle
              title={itemData.item.pose_name}
              urlToImage={itemData.item.urlToImage}
            />
          </TouchableOpacity>
        )}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  screenStyle: {
    backgroundColor: "white",
    // paddingTop : 25,
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
    // fontWeight: 'bold'
    // color: '#1e90ff'
  },
});

export default LifeStyle;

const articleCollections = [
  {
    image: 'https://images.unsplash.com/photo-1566501206188-5dd0cf160a0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    title: 'Yoga'
  },
  {
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1035&q=80',
    title: 'Diet'
  },
  {
    image: 'https://images.unsplash.com/photo-1589955791915-526198ae4ee9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    title: 'Exercise'
  },
  {
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    title: 'Meditation'
  },
  {
    image: 'https://images.unsplash.com/photo-1494597564530-871f2b93ac55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    title: 'Fitness 360'
  },
];
