import { createStackNavigator, createAppContainer } from 'react-navigation';
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

export default createAppContainer(AppNavigator);
