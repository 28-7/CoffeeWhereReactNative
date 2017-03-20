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
            <Text style={styles.box}>
                <View style={styles.image}>
                    <Image source={{ uri: this.props.data.pic }} style={{ height: 100 }} />
                    <Text style={styles.imageText}>{this.props.data.shortTitle}</Text>
                </View>
                <Text style={{flex:1}}>{this.props.data.date}</Text>
                <Text style={{flex:1}}>{this.props.data.author}</Text>
                <Text style={{flex:1}}>{this.props.data.description}</Text>
            </Text>
        );
    }
}

const styles = StyleSheet.create({
    box: {
        // width: 200,
        // height:100
        flex: 1,
        flexDirection:'column'
    },
    image: {
        width: 100,
        height: 100,
        flex:1
    },
    imageText: {
        position: 'relative',
        bottom: 20,
        left:0
    }
});