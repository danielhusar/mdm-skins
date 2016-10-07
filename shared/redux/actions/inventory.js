import * as ActionTypes from '../constants/constants';
import { addNotification } from './notification';
import { get, post } from '../../../helpers/request';

export function addInventory(inventory) {
  return {
    type: ActionTypes.ADD_INVENTORY,
    inventory,
  };
}

export function fetchInventory() {
  return dispatch => get.call(this, '/api/auth/user/inventory')
    .then(response => dispatch(addInventory(response.body)));
}

export function sellItem(item) {
  return dispatch => post('/api/auth/item/sell', item)
    .then(response => {
      if (response.body.success) {
        dispatch(addNotification('succes', 'Item added succesfully'));
      } else {
        dispatch(addNotification('error', 'There was error adding your item'));
      }
    });
}
