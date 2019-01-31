import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { getGames } from 'src/Actions';
import Icon from 'react-native-vector-icons/FontAwesome';

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
      games: [],
      loading: true,
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
    const { navigate } = this.props.navigation;
    navigate('Search');
  }

  async componentDidMount() {
    try {
      const response = await getGames();
      this.props.navigation.setParams({ toggleSearchBar: this.toggleSearchBar });

      const games = this.handleGetGamesResponse(response);
      this.setState({
        games,
        loading: false,
      })

    } catch (e) {
      console.log(e);
    }
  }

  handleGetGamesResponse = (response) => {
    const { games: { game } } = response;

    if (Array.isArray(game)) {
      return game;
    }

    return [game];
  }

  onItemPress = (item) => {
    const { navigate } = this.props.navigation;

    navigate('Info', item);
  }

  fetchNextGames = async () => {
    const { games } = this.state;
    const offset = games.length;

    const response = await getGames({offset});
    const handledResponse = this.handleGetGamesResponse(response);
    this.setState({
      games: games.concat(handledResponse),
    })
  }

  render() {
    const { games, loading } = this.state;

    if (loading) {
      return <Loading />;
    }

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar translucent backgroundColor='#f47b2b' barStyle="light-content" />
        <GamesList
          fetchNextGames={this.fetchNextGames}
          onItemPress={this.onItemPress}
          data={games}
        />
      </SafeAreaView>
    );
  }
}