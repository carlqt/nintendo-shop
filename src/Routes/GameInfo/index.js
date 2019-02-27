import React from 'react';
import { ScrollView ,StyleSheet, Text, View } from 'react-native';

import { getGameInfo } from 'src/Actions';
import Loading from 'src/Components/loading';
import Contents from './Contents';

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
      headerTintColor: 'white',
      headerTransparent: true,
    };
  }

  render() {
    const { loading, game } = this.state;

    if (loading) {
      return <Loading />;
    }

    return(
      <ScrollView style={styles.container}>
        <Contents
          { ...game }
        />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#F7F7F7',
  },
});
