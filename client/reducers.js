import { combineReducers } from 'redux';

import auth from './modules/Auth/AuthReducer';
import posts from './modules/Post/PostReducer';
import intl from './modules/Intl/IntlReducer';

// Combine all reducers into one root reducer
export default combineReducers({
  auth,
  posts,
  intl
});
