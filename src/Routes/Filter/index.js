import { connect } from "react-redux";
import { setFilter, resetFilter } from 'src/Store/Filters/actions';
import { loadGames } from 'src/Store/Games/actions';
import Filter from './Filter';

const mapStateToProps = state => ({
  filters: state.filterStore,
});

const mapDispatchToProps = {
  setFilter,
  resetFilter,
  loadGames,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
