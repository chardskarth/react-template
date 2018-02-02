import {
  SET_ADD_TODO_TEXT,
  ADD_TODO,
  DELETE_TODO
} from 'app/action-types'


let initialState = {
  addTodo: {
    value: '',
    placeholder: 'Add a todo here!',
    buttonText: 'Add'
  },
  todo: [
  ]
}


export default function(state = initialState, payload){
  switch(payload.type){
    case SET_ADD_TODO_TEXT: {
      // return Object.assign({}, state, {
      //   addTodo: {
      //     ...state.addTodo,
      //     value: payload.value
      //   }
      // });
      return {
        ...state,
        addTodo: {
          ...state.addTodo,
          value: payload.value
        }
      }
    }
    case ADD_TODO: {
      let addTodoValue = state.addTodo.value;
      let addTodo = {
        ...state.addTodo,
        value: ''
      }
      let todo = state.todo.concat([addTodoValue]);
      return { addTodo, todo }
    }
    case DELETE_TODO: {
      let {index} = payload;
      let {todo} = state;
      todo = todo.slice(0, index).concat(todo.slice(index + 1, todo.length));
      return {
        ...state,
        todo
      }
    }
    default: {
      return state;
    }
  }
}