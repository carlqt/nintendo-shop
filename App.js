import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';

import store from './src/Store/index';
import GamesIndex from './src/Routes/games_index';
import GameInfoScreen from './src/Routes/GameInfo';
import SearchScreen from './src/Routes/Search';
import FilterScreen from './src/Routes/Filter';

const AppNavigator = createStackNavigator(
  {
    Home: GamesIndex,
    Info: GameInfoScreen,
    Search: SearchScreen,
    Filter: FilterScreen,
  },
  {
    initialRouteName: 'Home',
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
};
