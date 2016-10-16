import * as ActionTypes from '../constants/constants';
import { addNotification, removeNotification } from './notification';
import { get, post } from '../../../helpers/request';

export function addBrowse(browse) {
  return {
    type: ActionTypes.ADD_BROWSE,
    browse,
  };
}

export function fetchBrowse(params) {
  const page = params && params.page ? params.page : 1;
  return dispatch => post.call(this, '/api/items/browse', { page })
    .then(response => dispatch(addBrowse(response.body)));
}
