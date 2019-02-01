import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Overlay, Button } from 'react-native-elements';

import Categories from './Categories';

export default class Filter extends Component {
  constructor(props) {
    super(props);

    const { appliedFilters: { category }} = props;

    this.state = {
      categories: category,
    };
  }

  removeCategory = (category) => {
    const { categories } = this.state;

    this.setState({
      categories: categories.filter(c => c !== category),
    });
  }

  addCategory = (category) => {
    const { categories } = this.state;

    this.setState({
      categories: categories.concat(category),
    });
  }

  applyFilter = () => {
    const { applyFilter, onBackdropPress } = this.props;
    const {
      categories: category,
    } = this.state;

    applyFilter({ category });
    onBackdropPress();
  }

  render() {
    const {
      onBackdropPress,
    } = this.props;
    const { categories } = this.state;

    return (
      <Overlay
        isVisible
        {...{ onBackdropPress }}
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
              <Button
                raised
                title="Apply"
                type="solid"
                onPress={this.applyFilter}
              />
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
    paddingVertical: 8,
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
