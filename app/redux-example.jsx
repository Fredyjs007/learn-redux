  var redux = require('redux');
  
  console.log('starting redux example');

  var actions = require('./actions/index');
  var store = require('./store/configureStore').configure();

  // Subscribe to changes
  var unsubscribe = store.subscribe(() => {
    var state = store.getState();

    console.log('New state', store.getState());

    if (state.map.isFetching) {
      document.getElementById('app').innerHTML = 'Loading...';
    } else if (state.map.url) {
      document.getElementById('app').innerHTML = '<a href="' + state.map.url + '" target="_blank">View your location</a>';
    }
  });

  //unsubscribe();
  var currentState = store.getState();
  console.log('currentState', currentState);

  store.dispatch(actions.fetchLocation());

  store.dispatch(actions.changeName('Fredy'));
  store.dispatch(actions.changeName('Emily'));

  store.dispatch(actions.addHobby('Running'));
  store.dispatch(actions.addHobby('Smoking'));
  store.dispatch(actions.removeHobby(2));

  store.dispatch(actions.addMovie('The Dark Knight', 'Action'));
  store.dispatch(actions.addMovie('Django', 'Action'));
  store.dispatch(actions.removeMovie(1));
