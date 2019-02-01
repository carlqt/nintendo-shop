import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Overlay, Divider } from 'react-native-elements';

export default class Filter extends Component {
  render() {
    const { isVisible, onBackdropPress } = this.props

    return(
      <Overlay
        {...{ isVisible, onBackdropPress }}
      >
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Filter</Text>
          </View>
          <Divider style={{width: '100%'}} />
        </View>
      </Overlay>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    padding: 8,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 14,
  }
})