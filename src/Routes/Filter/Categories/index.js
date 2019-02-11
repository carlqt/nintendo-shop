import React, { PureComponent } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import Category from './Category';
import {
  CATEGORIES,
} from '../Constants';

export default class Categories extends PureComponent {
  constructor() {
    super();

    this.state = {
      categories: [],
    }
  }

  toggleCategory = (category) => {
    const { addCategory, removeCategory } = this.props;

    if (this.isSelected(category)) {
      return removeCategory(category, 'categories');
    }

    return addCategory(category, 'categories');
  }

  isSelected = (category) => {
    const { categories } = this.props;

    return categories.includes(category);
  }

  renderCategory = category => (
    <Category
      value={category}
      key={category}
      selected={this.isSelected(category)}
      onPress={this.toggleCategory}
    />
  )

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Categories</Text>
        <View style={styles.categoriesContainer}>
          { Object.keys(CATEGORIES).map(this.renderCategory) }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 12,
  },
  categoriesContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  header: {
    fontWeight: '600',
    fontSize: 18,
    marginBottom: 12,
  },
});
