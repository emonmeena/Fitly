import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';

const Article = () =>{
    return (
        <View style={styles.articleStyle}>
            <View>
                <Image style={styles.imageStyle} source={{uri: "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/pu1epekisyas15jvw8e9.jpg"}} />
            </View>
            <View style={styles.textContainerStyle}>
                <Text style={styles.headingStyle}>Trump on Corona </Text>
                <Text style={styles.descriptionStyle}>New York’s Twentyeight Health is taking the wildly telemedicine services for women’s health popularized by companies like Nurx and bringing them to a patient population that previously hadn’t had access.  The mission to provide women who are Medicaid or under…</Text>
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
        height: '72%',
        backgroundColor: 'white',
        paddingTop: 15,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        borderRadius: 10,
        margin: 8,
        marginTop: 10
    },
    imageStyle: {
        height: 200,
        margin: 5
    },
    textContainerStyle:{
        padding: 7
    }
})

export default Article;