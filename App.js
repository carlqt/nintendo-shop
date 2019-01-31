import { createStackNavigator, createAppContainer } from "react-navigation";
import GamesIndex from './src/Routes/games_index';
import GameInfoScreen from './src/Routes/GameInfo';
import SearchScreen from './src/Routes/Search';

const AppNavigator = createStackNavigator(
  {
    Home: GamesIndex,
    Info: GameInfoScreen,
    Search: SearchScreen,
  },
  {
    initialRouteName: "Home",
  }
);

export default createAppContainer(AppNavigator);