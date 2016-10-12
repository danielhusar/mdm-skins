import * as ActionTypes from '../constants/constants';
import { addNotification } from './notification';
import { get, post } from '../../../helpers/request';

export function addSelling(selling) {
  return {
    type: ActionTypes.ADD_SELLING,
    selling,
  };
}

export function fetchSelling() {
  return dispatch => get.call(this, '/api/auth/user/selling')
    .then(response => dispatch(addSelling(response.body)));
}

export function deleteItem(item) {
  return dispatch => post('/api/auth/item/delete', item)
    .then(
      () => {
        dispatch(addNotification('succes', 'Item added succesfully'));
        dispatch(fetchSelling());
      },
      () => dispatch(addNotification('error', 'There was error adding your item'))
    );
}
