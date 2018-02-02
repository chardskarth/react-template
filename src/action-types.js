let constantTypes = [
  "EXAMPLE_ACTIONTYPE_1",
  "EXAMPLE_ACTIONTYPE_2",

  //ACTIONS IN TODOSCENE
  "SET_ADD_TODO_TEXT",
  "ADD_TODO",
  "DELETE_TODO"
];

const ACTION_TYPES 
  = constantTypes.reduce((prev, curr) => Object.assign(prev, {[curr]: curr}), {});

// global.ACTION_TYPES = ACTION_TYPES;
// export default ACTION_TYPES;
module.exports = {
  ...ACTION_TYPES,
  default: ACTION_TYPES
};