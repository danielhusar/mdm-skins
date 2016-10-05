import fetch from 'isomorphic-fetch';
import * as ActionTypes from '../constants/constants';
import { addNotification } from './notification';
import { config } from '../../../helpers/config';

export function addInventory(inventory) {
  return {
    type: ActionTypes.ADD_INVENTORY,
    inventory,
  };
}

export function fetchInventory() {
  return (dispatch) => {
    return fetch(`${config.baseURL}/api/auth/inventory`)
    .then(response => response.json())
    .then(response => {
      dispatch(addInventory(response));
      return response;
    });
  };
}

export function sellItem(item) {
  return (dispatch) => {
    return fetch(`${config.baseURL}/api/auth/sell`, { body: JSON.stringify(item) })
    .then(response => response.json())
    .then(response => {
      if (response.success) {
        dispatch(addNotification('succes', 'Item added succesfully'));
      } else {
        dispatch(addNotification('error', 'There was error adding your item'));
      }

      return response;
    });
  };
}
