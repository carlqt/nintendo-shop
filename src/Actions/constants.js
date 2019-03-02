// add to query string for searching
// search=diablo

export const gameInfoURL = "https://www.nintendo.com/json/content/get/game"
export const gamesListURL = `https://www.nintendo.com/json/content/get/filter/game`;
export const gameInfoHTML = 'https://www.nintendo.com/games/detail'

// Index searching
export const ALGOLIA_API_KEY = '36a8038135ce30ec9b593cc8b2026e44'
export const ALGOLIA_APP_ID = 'U3B6GR4UA3'
export const gamesIndexUrl = 'https://u3b6gr4ua3-dsn.algolia.net/1/indexes/games-ncom-prod'
export const allResultsUrl = 'https://u3b6gr4ua3-dsn.algolia.net/1/indexes/allresults-ncom-prod?page=0&hitsPerPage=6&query=mario&getRankingInfo=true'

export const FILTER_PARAMS = [
  'category',
  'price',
  'availability',
  'number',
  'price',
]

// default parameter filters

export const defaultFilterParams = {
  offset: 0,
  limit: 40,
  system: 'switch',
  sort: 'title',
  direction: 'asc',
}
