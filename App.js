import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { getGamesAmerica } from 'nintendo-switch-eshop';

import Loading from './src/Components/loading';
import GamesList from './src/Routes/Games';

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
      const response = await getGamesAmerica();
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
      <SafeAreaView style={styles.container}>
        <GamesList
          data={items}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
});
