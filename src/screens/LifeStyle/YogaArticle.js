import React from "react";
import { View, Text, StyleSheet } from "react-native";

const YogaArticle = ({ description, title, benefits }) => {
  return (
    <View style={styles.articleStyle}>
      <View></View>
      <View style={styles.textContainerStyle}>
        <Text numberOfLines={2} style={styles.headingStyleBlack}>
          {title}
        </Text>
        <Text style={styles.headingStyle}>{"Benefits"}</Text>
        <Text numberOfLines={4}>{benefits}</Text>
        <Text style={styles.headingStyle}>{"Steps to Perform"}</Text>
        <Text numberOfLines={8}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  articleStyle: {
    backgroundColor: "white",
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.7,
    shadowRadius: 7,
    elevation: 4,
  },
  headingStyle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "grey",
  },
  headingStyleBlack: {
    fontSize: 18,
    fontWeight: "bold",
  },
  descriptionStyle: {
    fontSize: 15,
    color: "grey",
  },
  imageStyle: {
    height: 180,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
  },
  textContainerStyle: {
    padding: 10,
    height: 300,
  },
});

export default YogaArticle;
