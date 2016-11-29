  var redux = require('redux');

  var stateDefault = {
    searchText: '',
    showCompleted: false,
    todos: []
  };
  var reducer = (state = stateDefault, action) => {

    switch (action.type) {
      case 'CHANGE_SEARCH_TEXT':
        return {
          ...state,
          searchText: action.searchText
        };
      default:
        return state;
    }
  };
  var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  //Subscribe to changes
    store.subscribe(() => {
      var state = store.getState();
    document.getElementById('app').innerHTML = state.searchText;
  });

  var currentState = store.getState();
  console.log('currentState', currentState);
  //unsubscribe();

  store.dispatch({
    type: 'CHANGE_SEARCH_TEXT',
    searchText: 'Have Fun'
  });

  store.dispatch({
    type: 'CHANGE_SEARCH_TEXT',
    searchText: 'Smoke some dank weed with some hynas'
  });
