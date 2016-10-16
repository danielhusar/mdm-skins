import * as ActionTypes from '../constants/constants';
import { addNotification, removeNotification } from './notification';
import { get, post } from '../../../helpers/request';

export function addBrowseSettings(settings) {
  return {
    type: ActionTypes.ADD_BROWSE_SETTINGS,
    settings,
  };
}

export function fetchBrowseSettings() {
  return dispatch => post.call(this, '/api/items/settings')
    .then(response => dispatch(addBrowseSettings(response.body)));
}
