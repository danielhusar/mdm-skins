import fetch from 'isomorphic-fetch';
import * as ActionTypes from '../constants/constants';
import { config } from '../../../helpers/config';

export function addNotification(color, text) {
  return {
    type: ActionTypes.ADD_NOTIFICATION,
    color,
    text,
  };
}

export function removeNotification() {
  return {
    type: ActionTypes.REMOVE_NOTIFICATION,
  };
}
