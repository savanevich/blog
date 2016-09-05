import callApi from '../../helpers/apiCaller';
import {
  FETCH_POSTS,
  FETCH_POST,
  DELETE_POST,
  CREATE_POST
} from './PostTypes';

export function fetchPosts() {
  const request = callApi('posts');

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function fetchPost(id) {
  const request = callApi(`posts/${id}`);

  return {
    type: FETCH_POST,
    payload: request
  };
}

export function createPost(post) {
  const request = callApi('posts', 'post', {
    post: {
      name: post.name,
      title: post.title,
      content: post.content
    }
  });

  return {
    type: CREATE_POST,
    payload: request
  };
}

export function deletePost(id) {
  const request = callApi(`posts/${id}`, 'delete');

  return {
    type: DELETE_POST,
    payload: request
  };
}
