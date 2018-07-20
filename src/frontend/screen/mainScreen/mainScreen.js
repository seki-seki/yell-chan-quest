/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Dimensions, View, Image } from 'react-native';

const topImage = require('assets/image/ale-chan-top.png')

export default class Main extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={topImage} style={styles.backgroundImage} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 60,
        alignItems: 'center'
    },
    backgroundImage: {
        zIndex: -10,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        resizeMode: 'stretch',
        position: 'absolute'
    }
});
