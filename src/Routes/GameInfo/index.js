import React, { Fragment } from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';

import Loading from 'src/Components/loading';

export default class GameInfo extends React.Component {
  async componentDidMount() {
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
    return (
      <Loading />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
});