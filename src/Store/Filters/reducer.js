import { produce } from 'immer';

const initialState = {
  status: [],
  category: [],
};

export default function (state = initialState, action) {
  const { filters, type } = action;

  switch (type) {
    case 'SET_FILTER': {
      return produce(state, draft => ({
        ...draft,
        ...filters,
      }));
    }
    case 'RESET': {
      return initialState;
    }
    default: {
      return state;
    }
  }
}
