import { produce } from 'immer';

const initialState = {
  games: [],
  loading: true,
};

export default function (state = initialState, action) {
  const { data, type } = action;

  switch (type) {
    case 'SET_GAMES': {
      return produce(state, (draft) => {
        draft.loading = false;
        draft.games = data;
      });
    }
    case 'ADD_GAMES': {
      return produce(state, (draft) => {
        draft.games = draft.games.concat(data);
      });
    }
    case 'SET_LOADING': {
      return produce(state, (draft) => {
        draft.loading = data.loading;
      });
    }
    default: {
      return state;
    }
  }
}
