import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import GamesReducer from './Games/reducer';
import FilterReducer from './Filters/reducer';

const combinedReducers = combineReducers({
  gamesStore: GamesReducer,
  filterStore: FilterReducer,
});

export default createStore(combinedReducers, applyMiddleware(thunk));
