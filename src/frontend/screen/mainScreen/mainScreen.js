/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Dimensions, View, Image, Text} from 'react-native';
import {connect} from 'react-redux'

const mainImage = require('assets/image/yell-chan-main.png')
const hinoki = require('assets/image/equip/hinoki.png')
const ironSword = require('assets/image/equip/iron-sword.png')

class MainScreen extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {userData} = this.props
        return (
            <View style={styles.container}>
                <Text>{userData.level}lv</Text>
                <Text>{userData.gold}G</Text>
                <Image source={ironSword} style={styles.backgroundImageWeapon}/>
                <Image source={mainImage} style={styles.backgroundImage}/>
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    ...state
})
export default connect(mapStateToProps)(MainScreen)

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
    },
    backgroundImageWeapon: {
        zIndex: -11,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        resizeMode: 'stretch',
        position: 'absolute'
    }
});
