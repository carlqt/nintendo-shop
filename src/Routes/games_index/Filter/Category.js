import React, { PureComponent } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Colors from 'src/Lib/Colors';

export default class Category extends PureComponent {
  toggleCategory = () => {
    const {
      onPress,
      value,
      display,
    } = this.props;

    onPress({ value, display });
  }

  render() {
    const { selected, value, display } = this.props;

    return(
      <TouchableOpacity
        onPress={this.toggleCategory}
        style={[styles.chip, selected && styles.selected]}
        key={value}
      >
        <Text style={[selected && styles.selectedText]}>{display}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
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
  },
  selected: {
    // backgroundColor: '#2196f3',
    backgroundColor: Colors.NINTENDO_ORANGE,
  },
  selectedText: {
    color: 'white',
  }
})