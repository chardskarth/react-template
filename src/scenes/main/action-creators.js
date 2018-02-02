import {
  ADD_CONTACT_FIELD_CHANGED,
  ADD_CONTACT,
  CLEAR_FIELDS,
} from 'app/action-types'


let ACTION_CREATORS = {
  addContactFieldChanged(fieldName, value){
    return {
      type: ADD_CONTACT_FIELD_CHANGED,
      fieldName,
      value
    }
  },
  addContact(){
    return {
      type: ADD_CONTACT
    }
  },
  clearFields(){
    return {
      type: CLEAR_FIELDS
    }
  }
};

module.exports = {
  ...ACTION_CREATORS,
  default: ACTION_CREATORS
};