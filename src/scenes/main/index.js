import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import style from './styles.scss';

import AddContactForm from './components/add-contacts-form';
import ListContacts from './components/list-contacts';

class MainScene extends Component{
  render(){
    return (
      <div className="m-4">
        <h1 className={style.title}>Welcome to Contacts App!</h1>
        <div className={style.contactFormsContainer}>
          <div className={style.contactFormsRow}>
            <AddContactForm></AddContactForm>
            <ListContacts></ListContacts>
          </div>
        </div>
      </div>
    )
  }
}

function mapState(state){
  return state.mainScene;
}

function mapDispatch(dispatch){
  return bindActionCreators({}, dispatch);
}

export default connect(mapState, mapDispatch)(MainScene);