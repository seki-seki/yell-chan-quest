/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Dimensions, View, Image, Text } from 'react-native';
import { getUserData, createYellChan } from 'common/grobalFunction';

const topImage = require('assets/image/yell-chan-top.png')

export default class Main extends Component {
    constructor(props) {
        super(props)
        const userData = getUserData() || createYellChan()
        this.state = {
            userData: userData
        }
    }
    render() {
        const { userData } = this.state
        return (
            <View style={styles.container}>
                <Text>{userData.level}lv</Text>
                <Text>{userData.gold}G</Text>
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
