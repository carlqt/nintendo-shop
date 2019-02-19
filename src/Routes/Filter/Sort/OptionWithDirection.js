import React, { PureComponent } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import Option from './Option';

export default class OptionWithDirection extends PureComponent {
  onPress = () => {
    const {
      value,
      onPress,
      selected,
      direction: currentDir,
    } = this.props;

    let direction;

    if (selected) {
      direction = currentDir === 'asc' ? 'des' : 'asc';
    } else {
      direction = 'asc';
    }

    onPress(value, direction);
  }

  renderIcon = () => {
    const { selected, direction } = this.props;

    if (!selected) { return null; }

    return {
      des: <Icon name="arrow-long-up"/>,
      asc: <Icon name="arrow-long-down"/>,
    }[direction];
  }

  render() {
    const {
      value,
      style,
      selected,
    } = this.props;

    return (
      <Option
        {...{
          value,
          selected,
          style,
        }}
        onPress={this.onPress}
        icon={this.renderIcon()}
      />
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
