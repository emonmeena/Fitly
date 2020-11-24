import React from 'react';
import { ImageBackground } from 'react-native';
import { Image } from 'react-native';
import { View } from 'react-native';
import { Text, StyleSheet } from 'react-native'

const Collection = ({urlToImage, title, leftMargin}) =>{
    return (
        <View style={{marginLeft: leftMargin}} >
        <View style={styles.collectionStyle}>
            <ImageBackground style={styles.imageStyle} imageStyle={styles.imageStyle} source={{uri: urlToImage}} > 
            <View style={styles.child}>
                <Text style={styles.textStyle}> {title} </Text>
            </View>
            </ImageBackground>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    collectionStyle: {
        backgroundColor: 'white',
        height: 200,
        width: 170,
        borderRadius: 7,
        marginRight: 10,
        marginBottom: 10,
        shadowColor: "#000",
        shadowOpacity: 0.7,
        shadowRadius: 10,
        elevation: 4,
    },
    imageStyle: {
        flex: 1,
        borderRadius: 7,
    },
    child: {
        flexDirection: 'column-reverse',
        borderRadius: 7,
        backgroundColor: 'rgba(0,0,0,0.2)',
        height: 200
    },
    textStyle: {
        fontSize: 18,
        color: 'white',
        padding: 7,
    },
    
});

export default Collection;