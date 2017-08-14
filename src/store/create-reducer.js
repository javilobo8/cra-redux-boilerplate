export default function createReducer(INITIAL_STATE, ACTION_HANDLERS) {
  return function reducer(state = INITIAL_STATE, action) {
    if (ACTION_HANDLERS[action.type]) {
      return ACTION_HANDLERS[action.type](state, action);
    }
    return state;
  };
}
