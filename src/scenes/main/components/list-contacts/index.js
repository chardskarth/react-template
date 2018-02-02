import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import style from './styles.scss';

import {
  addContactFieldChanged,
  addContact,
} from 'app/scenes/main/action-creators';

import InputGroupText from 'app/components/input-group-text';

class AddContactsForm extends Component{
  onFieldChanged(fieldName, e){
    let value = e.target.value;
    this.props.addContactFieldChanged(fieldName, value);
  }
  render(){
    let contacts = this.props.items || [];
    return (
      <div className={style.mainBox}>
        <div className={style.header}>
          <div className={style.row}>
            <span>First Name</span>
            <span>Middle Name</span>
            <span>Last Name</span>
            <span>Address</span>
            <span>Contact Number</span>
            <span>Email</span>
          </div>
        </div>
        <div className={style.body}>
        {
          contacts.map((contact, i) => {
            return (
              <div key={i} className={style.container}>
                <div className={style.row}>
                  <span>{contact.firstName}</span>
                  <span>{contact.middleName}</span>
                  <span>{contact.lastName}</span>
                  <span>{contact.address}</span>
                  <span>{contact.contactNumber}</span>
                  <span>{contact.email}</span>
                </div>
              </div>
            );
          })
        }
        </div>
        {/*{JSON.stringify(this.props.items)}*/}
      </div>
      
    )
  }
}

function mapState(state){
  return {
    items: state.mainScene.contacts
  };
}

function mapDispatch(dispatch){
  return bindActionCreators({
    addContactFieldChanged,
    addContact
  }, dispatch);
}

export default connect(mapState, mapDispatch)(AddContactsForm);