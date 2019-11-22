import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import SearchBar from '../components/SearchBar';
import colors from '../styles/colors';

export default class EmptyContainer extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
      <SearchBar />
      <View style={styles.scrollview}>
        <Text style={styles.heading}>
          Explore Airbnb
        </Text>
        <View style={styles.categories}>
          
        </View>
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollview: {
    paddingTop: 100,
  },
  scrollViewContent: {
    paddingBottom: 80,
  },
  categories: {
    marginBottom: 40,
  },
  heading: {
    fontSize: 22,
    fontWeight: '600',
    paddingLeft: 20,
    paddingBottom: 20,
    color: colors.gray04,
    alignContent:'center'
  },
});