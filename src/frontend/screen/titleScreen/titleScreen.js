/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, TouchableHighlight, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux'
import {connect} from 'react-redux'

const topImage = require('assets/image/yell-chan-top.png')

class TitleScreen extends Component {
  render() {
    const {userData} = this.props
    return (
      <View style={styles.container}>
        <Image source={topImage} style={styles.backgroundImage} />
        <Text style={styles.title}>Yell-Chan Quest</Text>
          {userData && <TouchableHighlight onPress={() => {Actions.main()}} underlayColor="#841584">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Start</Text>
          </View>
        </TouchableHighlight>}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
    ...state
})
export default connect(mapStateToProps)(TitleScreen)

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
  },
  button: {
    marginTop:470,
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  },
  backgroundImage: {
    zIndex: -10,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    resizeMode: 'stretch',
    position: 'absolute'
  }
});
