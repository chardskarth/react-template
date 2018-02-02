import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {
  setAddTodoText,
  addTodo
} from 'app/scenes/todo/action-creators';

class AddTodoText extends Component{
  handleTextChange(e){
    let value = e.target.value;
    this.props.setAddTodoText(value);
  }
  render(){
    let inputTextProps = {
      type: 'text',
      className: 'form-control',
      placeholder: this.props.placeholder,
      value: this.props.value,
      onChange: this.handleTextChange.bind(this)
    }

    let buttonProps = {
      className:"btn btn-outline-secondary",
      type:"button",
      onClick: this.props.addTodo
    }

    return (
      <div className="input-group mb-3">
        <input {...inputTextProps}/>
        <div className="input-group-append">
          <button {...buttonProps}>{this.props.buttonText}</button>
        </div>
      </div>
    )
  }
}

function mapState(state){
  return state.todoScene.addTodo;
}

function mapDispatch(dispatch){
  return bindActionCreators({
    setAddTodoText,
    addTodo
  }, dispatch);
}

export default connect(mapState, mapDispatch)(AddTodoText);