import React, { PureComponent } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import Category from './Category';
import {
  CATEGORIES,
} from './Constants';

export default class Categories extends PureComponent {
  toggleCategory = (category) => {
    const { addCategory, removeCategory } = this.props;

    if (this.isSelected(category)) {
      return removeCategory(category);
    }

    return addCategory(category);
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
    marginTop: 12,
    flex: 1,
  },
  categoriesContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  header: {
    fontWeight: '600',
  },
});
