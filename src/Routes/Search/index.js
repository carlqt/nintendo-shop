import React from 'react';
import { Platform, SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { searchGame } from 'src/Actions';
import { SearchBar } from 'react-native-elements';
import { debounce } from 'throttle-debounce';

import List from './List';
import Colors from 'src/Lib/Colors';

export default class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      games: [],
    }
  }

  componentDidMount() {
    this.search.focus();
  }

  static navigationOptions = ({navigation}) => ({
    header: null,
    headerBackTitle: null,
  })

  handleTextChange = (str) => {
    this.setState({ value: str });

    if (str) {
      this.searchGame(str);
    }
  }

  searchGame = debounce(300, (str) => {
    searchGame(str)
      .then(hits => this.setState({ games: hits }))
  })

  onCancel = () => {
    this.props.navigation.goBack();
  }

  onClear = () => {
    this.setState({
      games: [],
    })
  }

  onItemPress = (item) => {
    const { navigate } = this.props.navigation;

    navigate('Info', item);
  }

  render() {
    const { value, games } = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar translucent barStyle="dark-content" />
        <SearchBar
          placeholder="Title"
          cancelButtonTitle="Cancel"
          platform={Platform.OS}
          value={value}
          onChangeText={this.handleTextChange}
          onCancel={this.onCancel}
          onClear={this.onClear}
          ref={search => this.search = search}
        />
        <List
          onItemPress={this.onItemPress}
          data={games}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.GRAY_10,
  },
});