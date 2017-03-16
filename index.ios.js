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

export default class CoffeeWhere extends Component {
  render() {
    return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        Welcome to CoffeeWhere!
      </Text>
      <ScrollableTabView
        style={{marginTop: 20, }}
        renderTabBar={() => <ScrollableTabBar />}
      >
        <Text tabLabel='Tab #1'>My</Text>
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
