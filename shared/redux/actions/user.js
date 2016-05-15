import fetch from 'isomorphic-fetch';
import * as ActionTypes from '../constants/constants';
import { config } from '../../../helpers/config';

export function addUser(user) {
  return {
    type: ActionTypes.ADD_USER,
    user,
  };
}

export function fetchUser() {
  return (dispatch) => {
    return fetch(`${config.baseURL}/api/user`, {
        credentials: 'include'
      }).
      then(response => response.json()).
      then(response => {
        dispatch(addUser(response.user));
        return response.user;
      });
  };
}
