import {
  EXAMPLE_ACTIONTYPE_2
} from 'app/action-types';

import {all, takeEvery, delay} from 'redux-saga/effects';

function* example(){
  console.log('NEED TO IMPLEMENT SAGA');
  yield takeEvery(EXAMPLE_ACTIONTYPE_2, function* (action){
    yield delay(1000);
    console.log('emitted action caught in saga', action);
  });
}

export default function* (){
  yield all([
    example()
  ]);
}