import {injectReducer} from '../../reducers';

export default (store) => ({
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      const Landing = require('./containers/LandingContainer').default;
      const reducer = require('./modules/landing').default;

      injectReducer(store, {key: 'landing', reducer});
      cb(null, Landing);
    }, 'landing');
  },
});
