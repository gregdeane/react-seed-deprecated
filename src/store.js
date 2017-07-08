import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

import rootReducer from 'data/redux/root-reducer';

export const history = createHistory();

const env = process.env.NODE_ENV;
const immutable = (env === 'development' && [reduxImmutableStateInvariant()]) || [];

const store = createStore(
  rootReducer,
  undefined,
  compose(
    applyMiddleware(routerMiddleware(history), thunk, ...immutable),
    typeof window === 'object' && window.devToolsExtension ? window.devToolsExtension() : f => f,
  ),
);

export default store;
