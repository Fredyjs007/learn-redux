  var redux = require('redux');

  console.log('starting redux example');

  var reducer = (state = {name: 'Anonymous'}, action) => {
    // state = state || {name: 'Anonymous'}; es5 way

    switch (action.type) {
      case 'CHANGE_NAME':
        return {
          ...state,
          name: action.name
        };
      default:
        return state;
    }
  };
  var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  // Subscribe to changes
  var unsubscribe = store.subscribe(() => {
    var state = store.getState();

    console.log('Name is', state.name);
    document.getElementById('app').innerHTML = state.name;
  });

  var currentState = store.getState();
  console.log('currentState', currentState);
  //unsubscribe();

  store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Fredy'
  });

  store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Fred'
  });
