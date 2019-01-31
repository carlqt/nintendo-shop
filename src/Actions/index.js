import {
  gameInfoURL,
  ALGOLIA_API_KEY,
  ALGOLIA_APP_ID,
  gamesIndexUrl,
  gamesListURL,
  defaultFilterParams,
} from './constants';

export async function getGames(params = {}) {
  try {
    const urlParams = {
      ...defaultFilterParams,
      ...params,
    };

    const url = `${gamesListURL}?${encodedParams(urlParams)}`
    const response = await fetch(url);
    const jsonResponse = await response.json();

    return jsonResponse;
  } catch (e) {
    console.log(e);
  }
}

export async function getGameInfo(id) {
  try {
    const url = `${gameInfoURL}/${id}`;

    const response = await fetch(url);
    const jsonResponse = await response.json();

    return jsonResponse;
  } catch (e) {
    console.log(e);
  }
}

export async function searchGame(str) {
  try {
    const queryParams = {
      page: 0,
      hitsPerPage: 9,
      query: str,
      getRankingInfo: false,
    }
    const config = {
      headers: new Headers({
        'X-Algolia-API-Key': ALGOLIA_API_KEY,
        'X-Algolia-Application-Id': ALGOLIA_APP_ID,
      })
    }
    const urlWithParams = `${gamesIndexUrl}?${encodedParams(queryParams)}`

    const response = await fetch(urlWithParams, config);
    const jsonResponse = await response.json();

    return jsonResponse.hits.filter(switchGames);
  } catch (e) {
    // throw error
    console.log('ERROR');
    console.log(e);
  }
}

function encodedParams(params) {
  const query = Object.keys(params)
      .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
      .join('&');

  return query;
}

function switchGames({system_title}) {
  return system_title === 'Nintendo Switch';
}