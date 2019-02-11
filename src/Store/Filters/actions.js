export const setFilter = filters => async (dispatch) => {
  return dispatch({
    type: 'SET_FILTER',
    filters,
    ok: true,
  });
};

export const resetFilter = () => {
  return {
    type: 'RESET',
  };
};
