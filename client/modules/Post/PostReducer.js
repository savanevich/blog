const _ = require('lodash');

import {
  FETCH_POSTS,
  FETCH_POST,
  DELETE_POST
} from './PostTypes';

const initialState = {
  allPosts: [],
  currentPost: null
};


export default function(state = initialState, action) {

  switch (action.type) {
    case FETCH_POST:
      return {
        ...state,
        currentPost: action.payload.data.post
      };

    case FETCH_POSTS:
      return {
        ...state,
        allPosts: action.payload.data.posts
      };

    case DELETE_POST :
      return {
        ...state,
        allPosts: action.payload.data.posts.filter(post => post.cuid !== action.cuid)
      };

    default:
      return state;
  }
}
