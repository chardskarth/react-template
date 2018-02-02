import {
  EXAMPLE_ACTIONTYPE_1
} from 'app/action-types';

import {combineReducers} from 'redux';

import mainSceneReducer from 'app/scenes/main/reducer';

export default combineReducers({
  mainScene: mainSceneReducer
})