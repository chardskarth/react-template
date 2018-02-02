import {
  EXAMPLE_ACTIONTYPE_1
} from 'app/action-types';

import {combineReducers} from 'redux';

import todoSceneReducer from './../scenes/todo/reducer';

export default combineReducers({
  example: (state, payload) => {
    console.log('NEED TO IMPLEMENT REDUCER');
    return state || {};
  },
  todoScene: todoSceneReducer
})