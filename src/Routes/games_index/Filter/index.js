import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Overlay, Divider } from 'react-native-elements';

import Categories from './Categories';

export default class Filter extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    }
  }

  removeCategory = (category) => {
    const { categories } = this.state;

    this.setState({
      categories: categories.filter(c => c.value != category.value)
    })
  }

  addCategory = (category) => {
    const { categories } = this.state;

    this.setState({
      categories: categories.concat(category)
    })
  }

  render() {
    const { isVisible, onBackdropPress } = this.props
    const { categories } = this.state;

    return(
      <Overlay
        {...{ isVisible, onBackdropPress }}
      >
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Filter</Text>
          </View>
          <Divider style={{width: '100%'}} />
          <Categories
            addCategory={this.addCategory}
            removeCategory={this.removeCategory}
            {...{ categories }}
          />
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
  },
  included: {
    backgroundColor: '#2196f3',
  }
})