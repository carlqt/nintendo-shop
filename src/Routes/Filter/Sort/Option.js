import React, { PureComponent } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

export default class Option extends PureComponent {
  onPress = () => {
    const { value, onPress } = this.props;
    onPress(value, 'des');
  }

  render() {
    const display = {
      featured: 'Featured',
      date: 'Release Date',
      price: 'Price',
      title: 'Title',
    };

    const {
      value,
      style,
      selected,
      icon,
    } = this.props;

    return (
      <TouchableOpacity
        onPress={this.onPress}
        style={[style, selected && styles.selected]}
      >
        <Text style={[styles.text, selected && styles.textSelected]}>
          { display[value] }
          { icon }
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  selected: {
    backgroundColor: 'blue',
  },
  text: {
    textAlign: 'center',
    marginRight: 4,
  },
  textSelected: {
    color: 'white',
    fontWeight: '600',
  },
});
