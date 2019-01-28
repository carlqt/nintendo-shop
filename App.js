import React, { Fragment } from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { getGamesAmerica } from 'nintendo-switch-eshop';

import Loading from './src/Components/loading';
import GamesList from './src/Routes/Games';
import AppBar from './src/Components/appbar';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      items: [],
      loading: true,
    }
  }

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

  render() {
    const { items, loading } = this.state;

    if (loading) {
      return <Loading />;
    }

    console.log(items[1]);

    return (
      <Fragment>
        <StatusBar translucent barStyle="light-content" />
        <SafeAreaView style={{flex: 0, backgroundColor: '#f47b2b'}}/>
        <SafeAreaView style={styles.container}>
          <AppBar />
          <GamesList
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
