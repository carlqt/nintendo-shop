import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Overlay, Button } from 'react-native-elements';

import Categories from './Categories';

export default class Filter extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };
  }

  removeCategory = (category) => {
    const { categories } = this.state;

    this.setState({
      categories: categories.filter(c => c.value != category.value)
    });
  }

  addCategory = (category) => {
    const { categories } = this.state;

    this.setState({
      categories: categories.concat(category)
    });
  }

  render() {
    const { isVisible, onBackdropPress } = this.props;
    const { categories } = this.state;

    return(
      <Overlay
        {...{ isVisible, onBackdropPress }}
      >
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Filter</Text>
          </View>
          <Categories
            addCategory={this.addCategory}
            removeCategory={this.removeCategory}
            {...{ categories }}
          />
          <View style={styles.footer}>
            <View style={styles.footerFlexContainer}>
              <Button title="Apply" type="solid" raised />
              <Button
                raised
                onPress={onBackdropPress}
                containerStyle={{ marginHorizontal: 4 }}
                title="Cancel"
                type="outline"
              />
            </View>
          </View>
        </View>
      </Overlay>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    padding: 8,
    borderBottomWidth: 1,
    borderColor: '#e1e8ee',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  footer: {
    borderTopWidth: 1,
    borderColor: '#e1e8ee',
    justifyContent: 'flex-end',
    height: 50,
    paddingTop: 2,
  },
  footerFlexContainer: {
    flex: 1,
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
});
