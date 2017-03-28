/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBar,
} from 'react-native';

import ScrollableTabView, { ScrollableTabBar, }
  from 'react-native-scrollable-tab-view';

import { SimpleArticle } from './app/share/simple-article.component'

export default class CoffeeWhere extends Component {
  render() {
    let test = {
      // pic: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
      shortTitle: 'short title',
      date: '2017/03/17',
      author: 'jimmy',
      description:'this is a test, just a test, do not ask too much'
    };

    let test2= {
      pic: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
      shortTitle: 'short title',
      date: '2017/03/20',
      author: 'norman',
      description:'this is a test, just a test, do not ask too much'
    };
    return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        Welcome to CoffeeWhere!
      </Text>
      <ScrollableTabView
        style={{marginTop: 20, }}
        renderTabBar={() => <ScrollableTabBar />}>
          <View tabLabel='Tab #1' style={{flex:1, flexDirection:'row'}}>
            <SimpleArticle data={test}></SimpleArticle>
          <SimpleArticle data={test2}></SimpleArticle>
        </View>
        <Text tabLabel='Tab #2'>favorite</Text>
        <Text tabLabel='Tab #3'>project</Text>
      </ScrollableTabView>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 30,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

AppRegistry.registerComponent('CoffeeWhere', () => CoffeeWhere);
