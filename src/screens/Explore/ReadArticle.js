import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const ReadArticle = (props) => {
  return (
    <View style={styles.conatiner}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          style={styles.imageStyle}
          source={{ uri: props.route.params.urlToImage }}
        />
        <View>
          <Text style={styles.authorName}>By {props.route.params.author}</Text>
          <Text style={styles.contentStyle}>
            {props.route.params.description}
          </Text>
          <Text style={styles.contentStyle}>{props.route.params.content}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    backgroundColor: "white",
    flex: 1,
  },
  imageStyle: {
    height: 300,
    // borderRadius: 7,
    marginBottom: 20,
  },
  authorName: {
    fontSize: 24,
    color: "gray",
    paddingHorizontal: 10,
    fontWeight: "bold",
  },
  contentStyle: {
    paddingHorizontal: 10,
    fontSize: 22,
    color: "gray",
  },
});

export default ReadArticle;
