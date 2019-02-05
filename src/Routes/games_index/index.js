import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar, TouchableOpacity, View } from 'react-native';
import { getGames } from 'src/Actions';
import Icon from 'react-native-vector-icons/FontAwesome';

import Loading from 'src/Components/loading';
import GamesList from 'src/Routes/Games';
import Filter from './Filter';

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
  static navigationOptions = ({ navigation }) => {
    const toggleSearchBar = navigation.getParam('toggleSearchBar', null);
    const showFilterScreen = navigation.getParam('showFilterScreen', null);

    return {
      headerBackTitle: null,
      headerStyle: {
        backgroundColor: '#f47b2b',
      },
      headerTitleStyle: {
        color: 'white',
      },
      headerRight: (
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={showFilterScreen} style={{ paddingHorizontal: 9 }}>
            <Icon color="white" size={20} name="filter" />
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleSearchBar} style={{ paddingHorizontal: 9 }}>
            <Icon color="white" size={20} name="search" />
          </TouchableOpacity>
        </View>
      ),
    };
  }

  constructor() {
    super();

    this.state = {
      filters: {
        category: [],
        status: [],
      },
      games: [],
      loading: true,
      showFilterScreen: false,
    };
  }

  componentDidMount() {
    try {
      const { navigation: { setParams }} = this.props;

      setParams({ toggleSearchBar: this.toggleSearchBar });
      setParams({ showFilterScreen: this.showFilterScreen });
      this.loadGames();
    } catch (e) {
      console.log(e);
    }
  }

  loadGames = async (params = {}) => {
    const response = await getGames(params);
    const games = this.handleGetGamesResponse(response);
    this.setState({
      games,
      loading: false,
    });
  }

  applyFilter = async (newFilters) => {
    const { filters } = this.state;
    const mergedFilters = Object.assign(filters, newFilters);

    this.setState({
      filters: mergedFilters,
      loading: true,
    });

    this.loadGames({
      ...mergedFilters,
    });
  }

  showFilterScreen = () => {
    this.setState({
      showFilterScreen: true,
    });
  }

  toggleSearchBar = () => {
    const { navigate } = this.props.navigation;
    navigate('Search');
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

  closeFilter = () => {
    this.setState({
      showFilterScreen: false,
    });
  }

  fetchNextGames = async () => {
    const { games, filters } = this.state;
    const offset = games.length;

    const response = await getGames({
      offset,
      ...filters,
    });
    const handledResponse = this.handleGetGamesResponse(response);
    this.setState({
      games: games.concat(handledResponse),
    });
  }

  renderFilterScreen = () => {
    const {
      showFilterScreen,
      filters,
    } = this.state;

    if (!showFilterScreen) {
      return null;
    }

    return (
      <Filter
        appliedFilters={filters}
        applyFilter={this.applyFilter}
        onBackdropPress={this.closeFilter}
      />
    );
  }

  render() {
    const {
      games,
      loading,
    } = this.state;

    if (loading) {
      return <Loading />;
    }

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar translucent backgroundColor="#f47b2b" barStyle="light-content" />
        <GamesList
          fetchNextGames={this.fetchNextGames}
          onItemPress={this.onItemPress}
          data={games}
        />
        { this.renderFilterScreen() }
      </SafeAreaView>
    );
  }
}
