  var redux = require('redux');

  console.log('starting redux example');

  var reducer = (state = {name: 'Anonymous'}, action) => {
    // state = state || {name: 'Anonymous'}; es5 way
    return state;
  };
  var store = redux.createStore(reducer);

  var currentState = store.getState();
  console.log('currentState', currentState);
