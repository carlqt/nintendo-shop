import { gameInfoURL } from './constants';

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