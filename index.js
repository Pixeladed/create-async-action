const createAction = require('redux-actions').createAction;

const createAsyncActionFactory = creator => (name, asyncFunc) => {
  const action = creator(name, asyncFunc);
  action.loading = name + '_LOADING';
  action.success = name + '_SUCCESS';
  action.error = name + '_ERROR';
  return action;
};

module.exports = createAsyncActionFactory(createAction);
