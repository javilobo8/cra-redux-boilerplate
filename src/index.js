import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import './styles/_core.scss';
import AppContainer from './containers/AppContainer';
import registerServiceWorker from './registerServiceWorker';

document.title = process.env.REACT_APP_TITLE;

axios.defaults.baseURL = process.env.REACT_APP_API_HOST;;
axios.defaults.withCredentials = true;

const store = require('./store/create-store').default(window.__INITIAL_STATE__);
const routes = require('./routes').default(store);

ReactDOM.render(<AppContainer store={store} routes={routes} />, document.getElementById('root'));
registerServiceWorker();
