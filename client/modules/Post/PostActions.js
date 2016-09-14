import axios from 'axios';
import callApi, { API_URL } from '../Common/Helpers/apiCaller';
import { browserHistory } from 'react-router';
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

export function createPost(formData) {
  axios({
    method: 'post',
    headers: {
      'content-type': 'application/json',
      'authorization': localStorage.getItem('token')
    },
    url: `${API_URL}/posts`,
    data: formData
  }).then(function() {
    browserHistory.push('/');
  });

  return {
    type: CREATE_POST,
    payload: request
  };
}

export function deletePost(id) {
  const request = callApi(`posts/${id}`, 'DELETE');

  return {
    type: DELETE_POST,
    payload: request
  };
}
