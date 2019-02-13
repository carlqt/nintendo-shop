import React, { PureComponent } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import Option from './Option';

export default class Sort extends PureComponent {
  constructor() {
    super();

    this.state = {
      sort: null,
      direction: null,
    }
  }

  setSort = (sort, direction) => {
    this.setState({
      sort,
      direction,
    })
  }

  isSelected = (option) => {
    const { sort } = this.state;

    return sort === option ? true : false;
  }

  render() {
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
            value="date"
            selected={this.isSelected('date')}
            style={styles.option}
            onPress={this.setSort}
          />

          <Option
            value="price"
            selected={this.isSelected('price')}
            direction
            style={styles.option}
            onPress={this.setSort}
          />

          <Option
            value="title"
            selected={this.isSelected('title')}
            direction
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
