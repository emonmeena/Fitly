import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';

const Article = ({urlToImage, title}) =>{
    return (
        <View style={styles.articleStyle}>
            <View>
                <Image style={styles.imageStyle} source={{uri: urlToImage}} />
            </View>
            <View style={styles.textContainerStyle}>
                <Text numberOfLines={2} style={styles.headingStyle}>{title}</Text>
            </View>
        </View>
    );    
}

const styles = StyleSheet.create({
    articleStyle: {
        backgroundColor: 'white',
        borderRadius: 7,
        marginVertical: 10,
        shadowColor: "#000",
        shadowOpacity: 0.7,
        shadowRadius: 7,
        elevation: 4,
    },
    headingStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'grey',

    },
    descriptionStyle: {
        fontSize: 15,
        color: 'grey',
    },
    imageStyle: {
        height: 180,
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
    },
    textContainerStyle:{
        padding: 10,
        height: 90
    }
})

export default Article;