const createAction = require('redux-actions').createAction;

module.exports = (name, asyncFunc) => {
  const action = createAction(name, asyncFunc);
  action.loading = name + '_LOADING';
  action.success = name + '_SUCCESS';
  action.error = name + '_ERROR';
  return action;
};
