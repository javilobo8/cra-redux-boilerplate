import Immutable from 'immutable';

import createReducer from 'store/create-reducer';
import {INCREMENT} from 'action-types';

export const increment = () => (dispatch) => {
  dispatch({type: INCREMENT});
};

export const incrementAsync = () => (dispatch, getState) => {
  const count = getState().landing.get('count');

  setTimeout(() => {
    dispatch({type: INCREMENT});
  }, count * 500);
};

export const actions = {
  increment,
  incrementAsync,
};

const INITIAL_STATE = Immutable.fromJS({
  count: 0,
});

const ACTION_HANDLERS = {
  [INCREMENT]: (state) => state.set('count', state.get('count') + 1),
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
