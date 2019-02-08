import React, { Component } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { Overlay, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

import Categories from './Categories';
import Status from './Status';

export default class Filter extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Filter',
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: 12 }}>
          <Icon size={36} name="ios-close" />
        </TouchableOpacity>
      ),
      headerRight: (
        <TouchableOpacity style={{ marginRight: 12 }}>
          <Text style={{ fontWeight: '600', color: 'blue' }}>Reset</Text>
        </TouchableOpacity>
      ),
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      status: [],
    };
  }

  addStatus = (statusItem) => {
    const { status } = this.state;

    this.setState({
      status: status.concat(statusItem),
    });
  }

  removeStatus = (statusItem) => {
    const { status } = this.state;

    this.setState({
      status: status.filter(s => s !== statusItem),
    });
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
      status,
    } = this.state;

    applyFilter({ category, status });
    onBackdropPress();
  }

  render() {
    const { categories, status } = this.state;

    return (
      <ScrollView style={styles.container}>
        <Status
          {...{ status }}
          addStatus={this.addStatus}
          removeStatus={this.removeStatus}
        />
        <Categories
          {...{ categories }}
          addCategory={this.addCategory}
          removeCategory={this.removeCategory}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
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
