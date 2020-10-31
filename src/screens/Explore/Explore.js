import React, {useState} from 'react';
import { Button } from 'react-native';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import newsAPI from '../../api/newsAPI';
import Article from './Article';

const Explore = () =>{

    const [news, setNews] = useState([]);

    const exploreAPI = async () =>{
        const response = await newsAPI.get('/everything', {
            params:{
                q: 'health',
                sortBy: 'popularity'
            }
        });
        setNews(response.data.articles);
    };

    return (
        <View style={styles.randm}>
            {/* <Button title="get news" onPress={exploreAPI} /> */}
            {/* <Text style={styles.textStyle}> We found {news.length} articles </Text> */}
            <Article />
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    },
    randm: {
        
    }
});

export default Explore;