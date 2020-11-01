import React from 'react';
import { Image } from 'react-native';
import { View } from 'react-native';
import { Text, StyleSheet } from 'react-native'

const Collection = ({urlToImage}) =>{
    return (
        <View style={styles.collectionStyle}>
            <Image style={styles.imageStyle} source={{uri: urlToImage}} />            
        </View>
    )
}

const styles = StyleSheet.create({
    collectionStyle: {
        backgroundColor: 'white',
        height: 200,
        width: 170,
        borderRadius: 7,
        marginLeft: 10,
        marginBottom: 10,
        shadowColor: "#000",
        shadowOpacity: 0.7,
        shadowRadius: 10,
        elevation: 4,
    },
    textStyle: {
        fontSize: 30
    },
    imageStyle: {
        height: 200,
        borderRadius: 7
    }
});

export default Collection;