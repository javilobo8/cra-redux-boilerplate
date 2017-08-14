import {applyMiddleware, compose, createStore as createReduxStore} from 'redux';
import thunk from 'redux-thunk';

import makeRootReducer from '../reducers';

const createStore = (initialState = {}) => {
  const middlewares = [thunk];

  const enhancers = [];
  let composeEnhancers = compose;

  if (process.env.NODE_ENV === 'development') {
    if (typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function') {
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    }
  }

  const store = createReduxStore(
    makeRootReducer(),
    initialState,
    composeEnhancers(
      applyMiddleware(...middlewares),
      ...enhancers
    )
  );
  store.asyncReducers = {}

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const reducers = require('../reducers').default;
      store.replaceReducer(reducers(store.asyncReducers));
    });
  }

  return store;
}

export default createStore;
