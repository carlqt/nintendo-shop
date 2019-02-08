import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import GamesReducer from './Games/reducer';

const combinedReducers = combineReducers({
  gamesStore: GamesReducer,
});

export default createStore(combinedReducers, applyMiddleware(thunk));
