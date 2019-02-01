import React, { PureComponent } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import Category from './Category';

export default class Categories extends PureComponent {
  toggleCategory = (category) => {
    const { categories, addCategory, removeCategory } = this.props;

    if (this.isSelected(category)) {
      return removeCategory(category);
    }

    return addCategory(category);
  }

  isSelected = (category) => {
    const { categories } = this.props;

    if (categories.find(c => c.value === category.value)) {
      return true;
    }

    return false;
  }

  renderCategory = category => (
    <Category
      {...category}
      key={category.display}
      selected={this.isSelected(category)}
      onPress={this.toggleCategory}
    />
  )

  render() {
    const categories = [
      {
        display: 'Action & Adventure',
        value: 'action_adventure',
      },
      {
        display: 'First-person action',
        value: 'first_person',
      },
      {
        display: 'RPG',
        value: 'role_playing',
      },
      {
        display: 'Puzzle & Strategy',
        value: 'puzzle_strategy',
      },
      {
        display: 'Party',
        value: 'party',
      },
      {
        display: 'Music & Fitness',
        value: 'music_fitness',
      },
      {
        display: 'Sports & Racing',
        value: 'sports_racing',
      },
      {
        display: 'Simulation',
        value: 'simulation',
      },
      {
        display: 'Education',
        value: 'education',
      },
    ];

    return (
      <View style={styles.container}>
        <Text style={styles.header}>Categories</Text>
        <View style={styles.categoriesContainer}>
          { categories.map(this.renderCategory) }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
  },
  categoriesContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  chip: {
    alignSelf: 'flex-start',
    padding: 8,
    margin: 6,
    backgroundColor: '#e0e0e0',
    borderRadius: 12,
  },
  badgeText: {
    color: 'black',
  },
  header: {
    fontWeight: '600',
  }
})