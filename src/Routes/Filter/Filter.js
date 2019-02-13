import React, { Component } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import { produce } from 'immer';

import Categories from './Categories';
import Status from './Status';
import Sort from './Sort';

export default class Filter extends Component {
  static navigationOptions = ({ navigation }) => {
    const resetFilter = navigation.getParam('resetFilter', null);

    return {
      title: 'Filter',
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.pop()} style={{ marginLeft: 12 }}>
          <Icon size={36} name="ios-close" />
        </TouchableOpacity>
      ),
      headerRight: (
        <TouchableOpacity onPress={resetFilter} style={{ marginRight: 12 }}>
          <Text style={{ fontWeight: '600', color: 'blue' }}>Reset</Text>
        </TouchableOpacity>
      ),
    };
  }

  constructor(props) {
    super(props);

    const { category: categories, status } = props.filters;

    this.state = {
      categories,
      status,
    };
  }

  componentDidMount() {
    const { navigation: { setParams }} = this.props;

    setParams({ resetFilter: this.resetFilter});
  }

  resetFilter = () => {
    const {
      resetFilter,
      loadGames,
      navigation: { pop },
    } = this.props;

    resetFilter();
    pop();
    loadGames();
  }

  applyFilter = () => {
    const { navigation, setFilter, loadGames } = this.props;
    const {
      categories: category,
      status,
    } = this.state;

    setFilter({ category, status });
    loadGames({
      category,
      status,
    });
    navigation.pop();
  }

  addFilterItem = (item, type) => {
    this.setState(
      produce((draft) => {
        draft[type] = draft[type].concat(item);
      }),
    );
  }

  removeFilterItem = (item, type) => {
    this.setState(
      produce((draft) => {
        draft[type] = draft[type].filter(filter => filter !== item);
      }),
    );
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

  render() {
    const { categories, status } = this.state;

    return (
      <ScrollView style={styles.container}>
        <Sort />
        <Status
          {...{ status }}
          addStatus={this.addFilterItem}
          removeStatus={this.removeFilterItem}
        />
        <Categories
          {...{ categories }}
          addCategory={this.addFilterItem}
          removeCategory={this.removeFilterItem}
        />
        <Button
          buttonStyle={styles.button}
          title="Apply Filter"
          type="solid"
          onPress={this.applyFilter}
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
  button: {
    borderRadius: 24,
  },
});
