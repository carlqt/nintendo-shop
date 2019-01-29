import React, { Fragment } from 'react';
import { StyleSheet, View } from 'react-native';

import Loading from 'src/Components/loading';
import { getGameInfo } from 'src/Actions';
import Hero from './hero';

export default class GameInfo extends React.Component {
  constructor() {
    super();

    this.state = {
      game: null,
      loading: true,
    }
  }

  async componentDidMount() {
    try {
      const { navigation } = this.props;
      const id = navigation.getParam('id');

      const resp = await getGameInfo(id);

      this.setState({
        game: resp.game,
        loading: false,
      })
    } catch (e) {
      console.log(e);
    }
  }

  static navigationOptions = ({ navigation }) => {
    const title = navigation.getParam('title', 'Game Info')

    return {
      title,
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#f47b2b',
      },
      headerTitleStyle: {
        color: 'white',
      },
    };
  }

  render() {
    const { loading, game } = this.state;

    if (loading) {
      return <Loading />;
    }

    const { large_icon: largeIcon } = game;

    return(
      <View styles={styles.container}>
        <Hero
          source={largeIcon}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
});