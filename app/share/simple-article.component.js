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
                <View style={styles.imageBlock}>
                    <Image source={{ uri: this.props.data.pic }} style={{ height: 100 }} />
                    <Text style={styles.imageText}>{this.props.data.shortTitle}</Text>
                </View>
                <View style={styles.dateBlock}>
                    <Text style={styles.flex1}>{this.props.data.date}</Text>
                    <Text style={styles.flex1}>{this.props.data.author}</Text>
                </View>
                <Text>{this.props.data.description}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    box: {
        flex: 1,
        margin: 1
    },
    imageBlock: {
        alignSelf: "stretch",
    },
    imageText: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        color: 'white',
        borderWidth: 1,
        width:'100%'
    },
    dateBlock: {
        flexDirection:'row'
    },
    flex1: {
        flex:1
    }
});