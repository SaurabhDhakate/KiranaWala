import React, {Component} from 'react';
import {ScrollView, StatusBar, View} from 'react-native';
import Home from './components/Home';

export class App extends Component {
  render() {
    return (
      <View>
        <Home />
        <StatusBar
          backgroundColor="#f8f8f8"
          barStyle="dark-content"></StatusBar>
      </View>
    );
  }
}

export default App;
