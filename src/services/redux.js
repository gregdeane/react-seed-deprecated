/* eslint no-trailing-spaces: 0 */

/*
  This method allows writing reducers in multiple ways:

  switch(action.type) {
    case 'something/ACTION': {}
  }

  -------------------------------------------------

  something/ACTION: (state, { prop1, prop2 }) => {}

  -------------------------------------------------

  ['something/ActionName']: (state, { prop1, prop2 }) => {}
*/
export default (initialState, reducerMap) => (
  function reducer(state = initialState, action) {
    if (reducerMap[action.type]) {
      return reducerMap[action.type](state, action.payload);
    }

    // "default" case (e.g. normal reducer "switch case")
    return state;
  }
);
