import { produce } from 'immer';

const initialState = {
  games: [],
  filters: {
    status: [],
    category: [],
  },
};

export default function (state = initialState, action) {
  const { data, type } = action;

  switch (type) {
    case 'SET_GAMES': {
      return produce(state, (draft) => {
        draft.games = data;
      });
    }
    case 'ADD_GAMES': {
      return produce(state, (draft) => {
        draft.games = draft.games.concat(data);
      });
    }
    default: {
      return state;
    }
  }
}
