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
                {this.imageRender()}
                {this.dateRender()}
                <Text>{this.props.data.description}</Text>
                { this.tagRender() }
            </View>
        );
    }

    tagRender() {
        return (
            this.props.data.tagList ? (
                <View style={styles.tagBlock}>
                    {
                        this.props.data.tagList.map((tag, key) => {
                            return <Text style={styles.tag} key={key}>{tag}</Text>
                        })
                    }
                </View>) : (null)
        );
    }

    imageRender() {
        return (
            this.props.data.pic ? (
                <View style={styles.imageBlock}>
                    <Image source={{ uri: this.props.data.pic }} style={{ height: 100 }} />
                    <Text style={styles.imageText}>{this.props.data.shortTitle}</Text>
                </View>) : (null)
        );
    }

    dateRender() {
        return (
            this.props.data.publice_date ? (
                <View style={styles.dateBlock}>
                    <Text style={styles.articleDate}>{this.props.data.publice_date + ' by ' + this.props.data.author}</Text>
                </View>
            ) : (
                    <View style={styles.dateBlock}>
                        <Text style={styles.eventDurtion}> {'日期:' + this.props.data.s_date + '~' + this.props.data.e_date}</Text>
                    </View>
                )
        );
    }
}

const styles = StyleSheet.create({
    box: {
        flex: 1,
        margin: 1
    },
    imageBlock: {
        alignSelf: "stretch"
    },
    imageText: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        color: 'white',
        borderWidth: 1,
        width: '100%'
    },
    dateBlock: {
        flexDirection: 'row'
    },
    flex1: {
        flex: 1
    },
    tagBlock: {
        width: '100%',
        flexDirection: 'row',
    },
    tag: {
        height: 25,
        backgroundColor: '#EEEEEE',
        margin: 2,
        paddingTop: 5,
        paddingLeft: 10,
        paddingBottom: 5,
        paddingRight: 10,
    },
    articleDate: {
        color: '#6192FF'
    },
    eventDurtion: {
        color: '#B7A5A4'
    }
});