import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import style from './styles.scss';

import {
  addContactFieldChanged,
  addContact,
  clearFields
} from 'app/scenes/main/action-creators';

import InputGroupText from 'app/components/input-group-text';

class AddContactsForm extends Component{
  onFieldChanged(fieldName, e){
    let value = e.target.value;
    this.props.addContactFieldChanged(fieldName, value);
  }
  render(){
    return (
      <div className={style.mainBox}>
        <InputGroupText {...this.props.firstName} onChange={this.onFieldChanged.bind(this, 'firstName')}></InputGroupText>
        <InputGroupText {...this.props.middleName} onChange={this.onFieldChanged.bind(this, 'middleName')}></InputGroupText>
        <InputGroupText {...this.props.lastName} onChange={this.onFieldChanged.bind(this, 'lastName')}></InputGroupText>
        <InputGroupText {...this.props.address} onChange={this.onFieldChanged.bind(this, 'address')}></InputGroupText>
        <InputGroupText {...this.props.contactNumber}  onChange={this.onFieldChanged.bind(this, 'contactNumber')}></InputGroupText>
        <InputGroupText {...this.props.email}  onChange={this.onFieldChanged.bind(this, 'email')}></InputGroupText> 
        <button type='button' className="btn btn-primary" onClick={this.props.addContact.bind(this)}>
          Add Contact
        </button>
        <button type='button' className="btn btn-primary" onClick={this.props.clearFields.bind(this)}>
          Clear Fields
        </button>
        input
      </div>
    )
  }
}

function mapState(state){
  return state.mainScene.addContactForm;
}

function mapDispatch(dispatch){
  return bindActionCreators({
    addContactFieldChanged,
    addContact,
    clearFields,
  }, dispatch);
}

export default connect(mapState, mapDispatch)(AddContactsForm);