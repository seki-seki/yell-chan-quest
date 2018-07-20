/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { Router, Scene, Tabs } from 'react-native-router-flux'
import TitleScreen from 'frontend/screen/titleScreen/titleScreen'
import MainScreen from 'frontend/screen/mainScreen/mainScreen'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key='root' hideNavBar={true}>
          <Scene key="home" component={TitleScreen} initial={true} hideNavBar={true} />
          <Tabs
            key='main'
            swipeEnabled={true}
            animationEnabled={false}
            hideNavBar={true}
          >
            <Scene
              hideNavBar={true}
              key='home'
              initial={true}
              component={MainScreen}
              tabBarLabel='home'
            />
            <Scene
              hideNavBar={true}
              key='adventure'
              component={TitleScreen}
              tabBarLabel="冒険にでる"
            />
            <Scene
              hideNavBar={true}
              key='status'
              component={TitleScreen}
              tabBarLabel="ステータス"
            />
            <Scene
              hideNavBar={true}
              key='weapon-shop'
              component={TitleScreen}
              tabBarLabel="武器屋"
            />
            <Scene
              hideNavBar={true}
              key='setting'
              component={TitleScreen}
              tabBarLabel="設定"
            />
          </Tabs>
        </Scene>
      </Router >
    )
  }
}
