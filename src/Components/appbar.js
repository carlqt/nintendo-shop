import React, { PureComponent } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

export default class AppBar extends PureComponent {
  render() {
    return(
      <View style={styles.root}>
        <View style={styles.container}>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    height: 44,
    backgroundColor: '#f47b2b',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  }
})