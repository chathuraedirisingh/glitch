import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class EmptyContainer2 extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Text>
            Empty Container 2
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    padding: 50,
  },
});