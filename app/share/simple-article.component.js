import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export class SimpleArticle extends Component {
    render() {
        return (
            <View style={styles.box}>
                <View style={styles.image}>
                    <Image source={{ uri: this.props.data.pic }} style={{ height: 100 }} />
                    <Text style={styles.imageText}>{this.props.data.shortTitle}</Text>
                </View>
                <Text>{this.props.data.date}</Text>
                <Text>{this.props.data.author}</Text>
                <Text>{this.props.data.description}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    box: {
        width: 200,
        height:100
    },
    image: {
        width: 100,
        height:100
    },
    imageText: {
        position: 'relative',
        bottom: 20,
        left:0
    }
});