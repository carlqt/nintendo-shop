import React, { PureComponent } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import Option from './Option';
import OptionWithDirection from './OptionWithDirection';

export default class Sort extends PureComponent {
  setSort = (sort, direction) => {
    const { onPress } = this.props;

    onPress(sort, direction);
  }

  isSelected = (option) => {
    const { sort } = this.props;

    return sort === option ? true : false;
  }

  render() {
    const { direction } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.header}>Sort by</Text>
        <View style={styles.optionsContainer}>
          <Option
            selected={this.isSelected('featured')}
            value="featured"
            style={styles.option}
            onPress={this.setSort}
          />

          <Option
            value="release"
            selected={this.isSelected('release')}
            style={styles.option}
            onPress={this.setSort}
          />

          <OptionWithDirection
            {...{ direction }}
            value="price"
            selected={this.isSelected('price')}
            style={styles.option}
            onPress={this.setSort}
          />

          <OptionWithDirection
            {...{ direction }}
            value="title"
            selected={this.isSelected('title')}
            style={[styles.option, styles.optionEnd]}
            onPress={this.setSort}
          />
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
  header: {
    fontWeight: '600',
    fontSize: 18,
    marginBottom: 12,
  },
  optionsContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  option: {
    width: 80,
    height: 50,
    borderLeftWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: '#d3d3d3',
    justifyContent: 'center',
  },
  optionText: {
    textAlign: 'center',
    marginRight: 4,
  },
  optionEnd: {
    borderRightWidth: 2,
  },
});
