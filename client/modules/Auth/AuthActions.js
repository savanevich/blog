import callApi from '../Common/Helpers/apiCaller';
import { browserHistory } from 'react-router';
import {
  AUTH_USER,
  AUTH_ERROR,
  UNAUTH_USER
} from './AuthTypes';

export function signInUser({ email, password }) {
  return function(dispatch) {
    const request = callApi('signin', 'POST', { email, password });

    request
      .then((response) => {
        dispatch({ type: AUTH_USER });

        localStorage.setItem('token', response.data.token);
        browserHistory.push('/');
      })
      .catch(() => {
        dispatch(authError('User with entered information doesn\'t exist'));
      });
  };
}

export function signUpUser({ email, username, password }) {
  return function(dispatch) {
    const request = callApi('signup', 'POST', { email, username, password });

    request
      .then((response) => {
        dispatch({ type: AUTH_USER });

        localStorage.setItem('token', response.data.token);
        browserHistory.push('/');
      })
      .catch(function (error) {
        if (error.response) {
          dispatch(authError(error.response.data.error));
        }
      });
  }
}

export function signOutUser() {
  localStorage.removeItem('token');
  browserHistory.push('/');

  return {
    type: UNAUTH_USER
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}
