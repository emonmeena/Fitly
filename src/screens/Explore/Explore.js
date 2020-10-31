import React, {useState} from 'react';
import { Button } from 'react-native';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import newsAPI from '../../api/newsAPI';

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
        <View>
            <Button title="get news" onPress={exploreAPI} />
            <Text style={styles.textStyle}> We found {news.length} articles </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
});

export default Explore;