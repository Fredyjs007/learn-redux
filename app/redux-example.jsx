  var redux = require('redux');

  console.log('starting redux example');

  var stateDefault = {
    name: 'Anonymous',
    hobbies: [],
    movies: []
  };
  var nextHobbyId = 1;
  var nextMovieId = 1;

  var nameReducer = (state = 'Anonymous', action) => {
    switch (action.type) {
      case 'CHANGE_NAME':
        return action.name
      default:
        return state;
    };
  };

  var hobbiesReducer = (state = [], action) => {
    switch (action.type) {
      case 'ADD_HOBBY':
        return [
          ...state,
          {
            id: nextHobbyId++,
            hobby: action.hobby
          }
        ];
      case 'REMOVE_HOBBY':
        return state.filter((hobby) => hobby.id !== action.id)
      default:
        return state;
    };
  };

  var moviesReducer = (state = [], action) => {
    switch (action.type) {
      case 'ADD_MOVIE':
        return [
          ...state,
          {
            id: nextMovieId++,
            title: action.title,
            genre: action.genre
          }
        ];
      case 'REMOVE_MOVIE':
        return state.filter((movie) => movie.id !== action.id)
      default:
        return state;
    };
  };

  var reducer = redux.combineReducers({
    name: nameReducer,
    hobbies: hobbiesReducer,
    movies: moviesReducer
  });

  var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  // Subscribe to changes
  var unsubscribe = store.subscribe(() => {
    var state = store.getState();

    console.log('Name is', state.name);
    document.getElementById('app').innerHTML = state.name;

    console.log('New state', store.getState());
  });

  var currentState = store.getState();
  console.log('currentState', currentState);
  //unsubscribe();

  store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Fredy'
  });

  store.dispatch({
    type: 'ADD_HOBBY',
    hobby: 'Running'
  });

  store.dispatch({
    type: 'ADD_HOBBY',
    hobby: 'Smoking'
  });

  store.dispatch({
    type: 'REMOVE_HOBBY',
    id: 2
  });

  store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Fred'
  });

  store.dispatch({
    type: 'ADD_MOVIE',
    title: 'The Dark Knight',
    genre: 'Action',
  });

  store.dispatch({
    type: 'ADD_MOVIE',
    title: 'Django',
    genre: 'Action',
  });

  store.dispatch({
    type: 'REMOVE_MOVIE',
    id: 1
  });
