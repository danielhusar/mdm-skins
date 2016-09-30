import * as ActionTypes from '../constants/constants';

const initialState = null;

const inventoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_INVENTORY :
      return action.inventory;

    default:
      return state;
  }
};

export default inventoryReducer;
