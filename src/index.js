//GLOBAL
import 'babel-polyfill';

// GLOBAL STYLE
import 'app/bootstrap4/_bootstrap.scss';
import 'app/fonts/fontawesome/font-awesome.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch, IndexRoute, browserHistory } from 'react-router-dom';

import {createStore, applyMiddleware, compose} from 'redux';
import createSaga from 'redux-saga';

// REDUX DEVTOOL SUPPORT
let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

import allReducers from './reducers';
import allSagas from './sagas';

let sagaMiddleware = createSaga();

let store = createStore(
  allReducers,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(allSagas);

// MAIN SCENES
import ExampleScene1 from './scenes/example-scene-1';
import ExampleScene2 from './scenes/example-scene-2';
import MainScene from './scenes/main';

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      {/* <Route path='/' component={ExampleScene1}>
        <Route path='scene2' component={ExampleScene2} />
      </Route> */}
      <Switch>
        <Route exact path='/' component={MainScene}></Route>
        <Route path='/scene1' component={ExampleScene1}></Route>
        <Route path='/scene2' component={ExampleScene2}></Route>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
