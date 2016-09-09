import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form'

import auth from './modules/Auth/AuthReducer';
import posts from './modules/Post/PostReducer';

// Combine all reducers into one root reducer
export default combineReducers({
  auth,
  posts,
  form
});
