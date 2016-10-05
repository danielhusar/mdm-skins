import * as ActionTypes from '../constants/constants';
import { get } from '../../../helpers/request';

export function addUser(user) {
  return {
    type: ActionTypes.ADD_USER,
    user,
  };
}

export function fetchUser(req) {
  return dispatch => get.call(this, '/api/user')
    .then(response => dispatch(addUser(response.body.user)));
}
