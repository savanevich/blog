import callApi from '../../helpers/apiCaller';
import { browserHistory } from 'react-router';
import {
  AUTH_USER,
  AUTH_ERROR,
  UNAUTH_USER
} from './AuthTypes';

export function signInUser({ email, password }) {
  return function(dispatch) {
    const request = callApi('signin', 'POST', { email, password });

    request.then((response) => {
        dispatch({ type: AUTH_USER });

        localStorage.setItem('token', response.data.token);

        browserHistory.push('/');
      })
      .catch(() => {
        dispatch(authError('Bad login info'));
      });
  };
}

export function signUpUser({ email, password }) {
  return function(dispatch) {
    const request = callApi('signup', 'POST', { email, password });

    request.then((response) => {
        dispatch({ type: AUTH_USER });

        localStorage.setItem('token', response.data.token);

        browserHistory.push('/');
      })
      .catch((response) => {
        dispatch(authError('Email is already in use'));
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
