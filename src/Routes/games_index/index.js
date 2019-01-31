import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { getGamesAmerica } from 'nintendo-switch-eshop';
import { searchGame } from 'src/Actions';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Searchbar as SearchBar } from 'react-native-paper';

import Loading from 'src/Components/loading';
import GamesList from 'src/Routes/Games';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  searchbar: {
    width: 120,
    height: 30,
    borderRadius: 8,
  },
});

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      items: [],
      loading: true,
      search: {
        input: '',
        focused: false,
        games: [],
      }
    }
  }

  static navigationOptions = ({navigation}) => {
    const toggleSearchBar = navigation.getParam('toggleSearchBar', null);

    return {
      headerBackTitle: null,
      headerStyle: {
        backgroundColor: '#f47b2b',
      },
      headerTitleStyle: {
        color: 'white',
      },
      headerRight: (
        <TouchableOpacity onPress={toggleSearchBar} style={{paddingHorizontal: 9}}>
          <Icon color="white" size={20} name="search" />
        </TouchableOpacity>
      ),
    }
  }

  toggleSearchBar = () => {
    const { search: { focused } } = this.state;

    this.setState({
      search: {
        focused: !focused,
      },
    })
  }

  async componentDidMount() {
    try {
      const response = await getGamesAmerica({}, 190)
      this.props.navigation.setParams({ toggleSearchBar: this.toggleSearchBar });
      this.setState({
        items: response,
        loading: false,
      })

    } catch (e) {
      console.log(e);
    }
  }

  onItemPress = (item) => {
    const { navigate } = this.props.navigation;

    navigate('Info', item);
  }

  async handleTextChange(string) {
    const response = await searchGame(string);
  }

  render() {
    const { items, loading, search } = this.state;
    const { focused } = search;

    if (loading) {
      return <Loading />;
    }

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar translucent backgroundColor='#f47b2b' barStyle="light-content" />
        {
          focused ?
          <SearchBar
            placeholder="Title"
            onChangeText={this.handleTextChange}
          /> :
          null
        }
        <GamesList
          onItemPress={this.onItemPress}
          data={items}
        />
      </SafeAreaView>
    );
  }
}