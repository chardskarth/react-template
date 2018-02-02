import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


class InputGroupText extends Component{
  handleChange(e){
    this.props.onChange(e);
  }

	render(){
		return (
			<div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroup-sizing-default">{this.props.label}</span>
        </div>
        <input type="text" className="form-control" onChange={this.handleChange.bind(this)} defaultValue={this.props.value}/>
      </div>
		)
	}
}

export function createInputGroupTextContainer(selector){
  
}

export default InputGroupText;