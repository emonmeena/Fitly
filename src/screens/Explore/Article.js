import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';

const Article = ({urlToImage, title}) =>{
    return (
        <View style={styles.articleStyle}>
            <View>
                <Image style={styles.imageStyle} source={{uri: urlToImage}} />
            </View>
            <View style={styles.textContainerStyle}>
                <Text numberOfLines={2} style={styles.descriptionStyle}>{title}</Text>
            </View>
        </View>
    );    
}

const styles = StyleSheet.create({
    headingStyle: {
        fontSize: 20,
    },
    descriptionStyle: {
        fontSize: 15,
        color: 'grey',
        
    },
    articleStyle: {
        height: 275,
        backgroundColor: 'white',
        borderColor: '#C0C0C0',
        borderRadius: 10,
        margin: 12,
        marginTop: 10
    },
    imageStyle: {
        height: 175,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    textContainerStyle:{
        padding: 7
    }
})

export default Article;