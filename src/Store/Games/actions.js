import {
  FILTER_PARAMS,
  gamesListURL,
  defaultFilterParams,
} from './constants';

export const loadGames = params => async (dispatch) => {
  dispatch({
    type: 'SET_LOADING',
    data: { loading: true },
  });

  const response = await getGames(params);

  return dispatch({
    type: 'SET_GAMES',
    data: handleGetGamesResponse(response),
    ok: true,
  });
};

export const getNextGames = params => async (dispatch) => {
  const response = await getGames(params);

  dispatch({
    type: 'ADD_GAMES',
    data: handleGetGamesResponse(response),
  });
};

function flatten(a, b) {
  return a.concat(b);
}

function encodeParams(val) {
  let params;

  if (this[val] === undefined) {
    return;
  }

  if (FILTER_PARAMS.includes(val)) {
    params = this[val].map(v => `${encodeURIComponent(val)}=${encodeURIComponent(v)}`);
  } else if (val === 'status') {
    params = this[val].map(v => `${encodeURIComponent(v)}=${encodeURIComponent(true)}`);
  } else {
    params = `${encodeURIComponent(val)}=${encodeURIComponent(this[val])}`;
  }

  return params;
}

function encodedParams(params) {
  const query = Object.keys(params)
    .map(encodeParams, params)
    .reduce(flatten, [])
    .join('&');

  return query;
}

const handleGetGamesResponse = (response) => {
  const { games: { game } } = response;
  let handledResponse;

  if (game === undefined) {
    handledResponse = [];
  } else if (Array.isArray(game)) {
    handledResponse = game;
  } else {
    handledResponse = [game];
  }

  return handledResponse;
};

const getGames = async (params = {}) => {
  const urlParams = {
    ...defaultFilterParams,
    ...params,
  };

  const url = `${gamesListURL}?${encodedParams(urlParams)}`;
  console.log(url);
  const response = await fetch(url);
  return response.json();
};
