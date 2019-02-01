import React, { PureComponent } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Colors from 'src/Lib/Colors';
import { CATEGORIES } from './Constants';

export default class Category extends PureComponent {
  toggleCategory = () => {
    const {
      onPress,
      value,
    } = this.props;

    onPress(value);
  }

  render() {
    const { selected, value } = this.props;
    const display = CATEGORIES[value];

    return (
      <TouchableOpacity
        onPress={this.toggleCategory}
        style={[styles.chip, selected && styles.selected]}
      >
        <Text style={[selected && styles.selectedText]}>{display}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  chip: {
    alignSelf: 'flex-start',
    padding: 7,
    marginVertical: 2,
    marginRight: 4,
    backgroundColor: '#e0e0e0',
    borderRadius: 12,
  },
  badgeText: {
    color: 'black',
  },
  header: {
    fontWeight: '600',
  },
  selected: {
    // backgroundColor: '#2196f3',
    backgroundColor: Colors.NINTENDO_ORANGE,
  },
  selectedText: {
    color: 'white',
  }
})