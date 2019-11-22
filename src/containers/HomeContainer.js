import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  Platform,
  Text,
} from 'react-native';

global.currentScreenIndex = 0;

class HomeContainer extends Component {

  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
          <Image
            source={require('./image/drawer.png')}
            style={{ width: 25, height: 25, marginLeft: 5 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}