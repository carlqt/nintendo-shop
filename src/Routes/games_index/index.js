import { connect } from "react-redux";
import { loadGames, getNextGames } from 'src/Store/Games/actions';
import GamesIndex from './games_index';

const mapStateToProps = state => ({
  gamesStore: state.gamesStore.games,
  filters: state.gamesStore.filters,
});

const mapDispatchToProps = {
  loadGames,
  getNextGames,
};

export default connect(mapStateToProps, mapDispatchToProps)(GamesIndex);
