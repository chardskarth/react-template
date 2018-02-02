import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {
  deleteTodo
} from 'app/scenes/todo/action-creators';

class TodoList extends Component{
  render(){
    return (
      <div>
         {
          this.props.todos.map((todo, i) => {
            return <div key={i}>
              <span>{todo}</span>
              <button>Edit</button>
              <button onClick={this.props.deleteTodo.bind(this, i)}>Delete</button>
            </div>
          })
        }
      </div>
    );
  }
}

function mapState(state){
  return {
    todos: state.todoScene.todo
  }
}

function mapDispatch(dispatch){
  return bindActionCreators({
    deleteTodo
  }, dispatch);
}

export default connect(mapState, mapDispatch)(TodoList);
