import React, { Fragment } from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { getGamesAmerica } from 'nintendo-switch-eshop';

import Loading from 'src/Components/loading';
import AppBar from 'src/Components/appbar';
import GamesList from 'src/Routes/Games';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      items: [],
      loading: true,
    }
  }

  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#f47b2b',
    },
    headerTitleStyle: {
      color: 'white',
    },
    title: "Home"
  };

  async componentDidMount() {
    try {
      const response = await getGamesAmerica({}, 0)
      this.setState({
        items: response,
        loading: false,
      })

    } catch (e) {
      console.log(e);
    }
  }

  onItemPress = (title) => {
    const { navigate } = this.props.navigation;

    navigate('Info', { title });
  }

  render() {
    const { items, loading } = this.state;

    if (loading) {
      return <Loading />;
    }

    console.log(items[1]);

    return (
      <Fragment>
        <SafeAreaView style={styles.container}>
          <StatusBar translucent backgroundColor='#f47b2b' barStyle="light-content" />
          <GamesList
            onItemPress={this.onItemPress}
            data={items}
          />
        </SafeAreaView>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
});