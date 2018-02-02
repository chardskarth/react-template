let constantTypes = [
  "EXAMPLE_ACTIONTYPE_1",
  "EXAMPLE_ACTIONTYPE_2",

  //ACTIONS IN TODOSCENE
  "ADD_CONTACT_FIELD_CHANGED",
  "ADD_CONTACT",
  "CLEAR_FIELDS",
];

const ACTION_TYPES 
  = constantTypes.reduce((prev, curr) => Object.assign(prev, {[curr]: curr}), {});

// global.ACTION_TYPES = ACTION_TYPES;
// export default ACTION_TYPES;
module.exports = {
  ...ACTION_TYPES,
  default: ACTION_TYPES
};