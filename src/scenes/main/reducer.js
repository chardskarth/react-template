import {
  ADD_CONTACT_FIELD_CHANGED,
  ADD_CONTACT,
  CLEAR_FIELDS,
} from 'app/action-types'


let initialState = {
  addContactForm: {
    firstName: {
      label: 'First Name',
      value: '',
    },
    middleName: {
      label: 'Middle Name',
      value: '',
    },
    lastName: {
      label: 'Last Name',
      value: '',
    },
    address: {
      label: 'Address',
      value: '',
    },
    contactNumber: {
      label: 'Contact Number',
      value: '',
    },
    birthday: {
      label: 'Birthday',
      value: '',
    },
    email: {
      label: 'Email',
      value: '',
    },
  },
  contacts: [
  ]
}

function getResetContactForm(contactForm){
  return Object.keys(contactForm).reduce((prev, fieldName) => {
    prev[fieldName] = {
      ...contactForm[fieldName],
      value: ''
    }
    return prev;
  }, {});
}

export default function(state = initialState, payload){
  switch(payload.type){
    case ADD_CONTACT_FIELD_CHANGED: {
      let {fieldName, value} = payload;
      let changedField = state.addContactForm[fieldName];
      changedField.value = value;
      state.addContactForm[fieldName] = Object.assign({}, changedField);
      return Object.assign({}, state);
    }
    case ADD_CONTACT: {
      let contactForm = state.addContactForm;
      // extract fields from form
      let contactToAdd = Object.keys(contactForm).reduce((prev, fieldName) => {
        prev[fieldName] = contactForm[fieldName].value;
        return prev;
      }, {});
      // reset contact form
      let addContactForm = getResetContactForm(contactForm);

      let contacts = state.contacts.concat([contactToAdd]);
      // return Object.assign({}, state, {addContactForm, contacts});
      return {
        ...state,
        contacts, addContactForm
      }
    }
    case CLEAR_FIELDS: {
      let contactForm = state.addContactForm;
      let addContactForm = getResetContactForm(contactForm);
      return {
        ...state,
        addContactForm
      }
    }
    default: {
      return state;
    }
  }
}