const _ = require('lodash');

import {
  FETCH_POSTS,
  FETCH_POST,
  DELETE_POST,
  ADD_COMMENT
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
        allPosts: action.payload.data.allPosts,
        popularPosts: action.payload.data.popularPosts,
        randomPosts: action.payload.data.randomPosts,
      };

    case DELETE_POST :
      return {
        ...state,
        allPosts: action.payload.data.posts.filter(post => post.cuid !== action.cuid)
      };

    case ADD_COMMENT:

      // es6 is awesome
      return {
        ...state,
        currentPost: {
          ...state.currentPost,
          comments: [
            action.payload.data.comment,
            ...state.currentPost.comments
          ]
        }
      };

    default:
      return state;
  }
}
