import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import style from './styles.scss';

import AddTodoText from './components/add-todo-text';
import TodoList from './components/todo-list';

class TodoScene extends Component{
  render(){
    return (
      <div>
        <h1 className={style.title}>Hello World, Todo!</h1>
        <AddTodoText></AddTodoText>
        <TodoList></TodoList>
      </div>
    )
  }
}

function mapState(state){
  return state.todoScene;
}

function mapDispatch(dispatch){
  return bindActionCreators({}, dispatch);
}

export default connect(mapState, mapDispatch)(TodoScene);