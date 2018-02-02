import {
  ADD_TODO,
  SET_ADD_TODO_TEXT,
  DELETE_TODO
} from 'app/action-types'


let ACTION_CREATORS = {
  setAddTodoText(value){
    return {
      type: SET_ADD_TODO_TEXT,
      value
    }
  },
  addTodo(){
    return {
      type: ADD_TODO
    }
  },
  deleteTodo(index){
    return {
      type: DELETE_TODO,
      index
    }
  }
};

module.exports = {
  ...ACTION_CREATORS,
  default: ACTION_CREATORS
};