import axios from 'axios';
import callApi, { API_URL } from '../Common/Helpers/apiCaller';
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
  const request = axios.post(`${API_URL}/posts`, formData);

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
