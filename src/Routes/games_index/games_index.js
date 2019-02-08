import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar, TouchableOpacity, View } from 'react-native';
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
      loading: true,
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

  fetchNextGames = async () => {
    const { getNextGames, gamesStore } = this.props;
    const offset = gamesStore.length;

    getNextGames(offset);
  }

  loadGames = async () => {
    const { loadGames } = this.props;

    const response = await loadGames();

    if (response.ok) {
      this.setState({
        loading: false,
      });
    }
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
    const { navigation: { navigate }} = this.props;

    navigate('Filter');
  }

  toggleSearchBar = () => {
    const { navigate } = this.props.navigation;
    navigate('Search');
  }

  onItemPress = (item) => {
    const { navigate } = this.props.navigation;

    navigate('Info', item);
  }

  render() {
    const { loading } = this.state;
    const { gamesStore: games } = this.props;

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
      </SafeAreaView>
    );
  }
}