import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Explore from './Explore'
import ReadArticle from './ReadArticle'

const ExploreStack = createStackNavigator();

export default function ExploreDefault(){

    return <NavigationContainer>
        <ExploreStack.Navigator>
            <ExploreStack.Screen name="Explore" component={Explore}/>
            <ExploreStack.Screen name="Read Article" component={ReadArticle}/>
        </ExploreStack.Navigator>
    </NavigationContainer>
}