import fetch from 'isomorphic-fetch';
import * as ActionTypes from '../constants/constants';
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
