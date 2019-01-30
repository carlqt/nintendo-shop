import { createStackNavigator, createAppContainer } from "react-navigation";
import GamesIndex from './src/Routes/games_index';
import GameInfoScreen from './src/Routes/GameInfo';

const AppNavigator = createStackNavigator(
  {
    Home: GamesIndex,
    Info: GameInfoScreen,
  },
  {
    initialRouteName: "Home",
  }
);

export default createAppContainer(AppNavigator);