# create-async-action
wrapper for redux-actions createAction function for better work with redux-promise-middleware

When using [redux-actions](https://github.com/acdlite/redux-actions/) and [redux-promise-middleware](https://github.com/pburtchaell/redux-promise-middleware/) together its annoying to do something like this:

```js
const myAction = createAction('MY_ACTION', async () => {
  ...
});

const reducer = handleActions({
  [myAction + '_SUCCESS']: () => ...
  [myAction + '_ERROR']: () => ...
  [myAction + '_LOADING']: () => ...
}, { ... })
```

Instead of this you can do something like this:

```js
import createAsyncAction from 'create-async-action';

const myAction = createAsyncAction('MY_ACTION', async () => {
  // the same code as before
});

const reducer = handleActions({
  [myAction.success]: () => ...
  [myAction.error]: () => ...
  [myAction.loading]: () => ...
}, { ... })
```

Yes, here I use custom suffixes for redux-promise-middleware.

Thanks for inspiring, [matpaul](https://github.com/matpaul)
