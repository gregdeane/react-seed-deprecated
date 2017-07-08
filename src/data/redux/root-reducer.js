import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import about from 'scenes/about/reducers/about-reducer';

const rootReducer = combineReducers({
  about,
  router: routerReducer,
});

export default rootReducer;
