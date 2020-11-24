import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const ReadArticle = (props) => {
  return (
    <View style={styles.conatiner}>
      <Image style={styles.imageStyle} source={{ uri: props.route.params.urlToImage }} />
      <View>
        <Text style={styles.authorName}>By {props.route.params.author}</Text>
        <Text style={styles.contentStyle}>{props.route.params.description}</Text>
        <Text style={styles.contentStyle}>{props.route.params.content}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    conatiner:{
        padding: 10,
    },
    imageStyle: {
        height: 180,
        borderRadius: 7,
    },
    authorName:{
        fontSize: 24,
        fontWeight: 'bold',
    },
    contentStyle:{
        fontSize: 18,
    },
});

export default ReadArticle;
