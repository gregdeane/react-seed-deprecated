import axios from 'axios';

import createReducer from 'services/redux';

const ABOUT_LOADED = 'about/LOADED';

const initialState = {};

export function aboutLoaded(data) {
  return {
    type: ABOUT_LOADED,
    payload: {
      data,
    },
  };
}

export function loadAbout() {
  const url = 'https://api.github.com/users/gregdeane';

  return dispatch => (
    axios.get(url)
      .then((response) => {
        dispatch(aboutLoaded(response.data));
      })
      .catch((error) => {
        console.log('error', error);
      })
  );
}

export default createReducer(initialState, {
  [ABOUT_LOADED]: (state, { data }) => ({
    ...state,
    ...data,
  }),
});
